<?php
/**
 * Books API Controller
 * GET    /api/books/index.php        → list all books
 * GET    /api/books/index.php?id=X   → get single book
 * GET    /api/books/index.php?search=keyword
 * POST   /api/books/index.php        → create (ADMIN only)
 * PUT    /api/books/index.php?id=X   → update (ADMIN only)
 * DELETE /api/books/index.php?id=X   → delete (ADMIN only)
 */

require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../middleware/auth.php';
require_once __DIR__ . '/../../helpers/response.php';
require_once __DIR__ . '/../../models/Book.php';

$method = getMethod();
$id     = isset($_GET['id'])     ? (int)$_GET['id']     : null;
$search = isset($_GET['search']) ? sanitize($_GET['search']) : null;
$deptId = isset($_GET['department_id']) ? (int)$_GET['department_id'] : null;
$lang   = isset($_GET['language']) ? sanitize($_GET['language']) : null;

$bookModel = new Book();

switch ($method) {

    // ── READ ───────────────────────────────────────────────────────────
    case 'GET':
        if ($id) {
            $book = $bookModel->getById($id);
            if (!$book) respondError('Book not found', 404);
            respondOk($book);
        }
        if ($search) {
            respondOk($bookModel->search($search));
        }
        respondOk($bookModel->getAll($deptId, $lang));

    // ── CREATE ─────────────────────────────────────────────────────────
    case 'POST':
        $admin = Auth::requireAdmin();
        $body  = getBody();

        $title      = sanitize($body['title']       ?? '');
        $pages      = (int)($body['pages_number']   ?? 0);
        $price      = (float)($body['price']        ?? 0);
        $language   = strtoupper($body['language']  ?? 'EN');
        $image      = sanitize($body['image']       ?? '');
        $publisherId  = !empty($body['publisher_id'])  ? (int)$body['publisher_id']  : null;
        $departmentId = !empty($body['department_id']) ? (int)$body['department_id'] : null;
        $authorIds  = $body['author_ids'] ?? [];

        if (!$title || $pages <= 0 || $price <= 0) {
            respondError('Title, pages, and price are required');
        }
        if (!in_array($language, ['AR', 'EN'])) respondError('Language must be AR or EN');

        // Get admin_id from token
        $db   = Database::connect();
        $stmt = $db->prepare("SELECT ADMIN_ID FROM ADMIN WHERE USER_ID = ?");
        $stmt->execute([$admin['user_id']]);
        $adminRow = $stmt->fetch();
        if (!$adminRow) respondError('Admin record not found', 403);

        $bookId = $bookModel->create(
            $title, $pages, $price, $language,
            $image ?: null, $publisherId, $departmentId,
            $adminRow['ADMIN_ID']
        );

        if (!empty($authorIds)) {
            $bookModel->setAuthors($bookId, $authorIds);
        }

        respondCreated($bookModel->getById($bookId), 'Book created');

    // ── UPDATE ─────────────────────────────────────────────────────────
    case 'PUT':
        Auth::requireAdmin();
        if (!$id) respondError('Book ID required');
        $body = getBody();

        $title        = sanitize($body['title']        ?? '');
        $pages        = (int)($body['pages_number']    ?? 0);
        $price        = (float)($body['price']         ?? 0);
        $language     = strtoupper($body['language']   ?? 'EN');
        $image        = sanitize($body['image']        ?? '');
        $publisherId  = !empty($body['publisher_id'])  ? (int)$body['publisher_id']  : null;
        $departmentId = !empty($body['department_id']) ? (int)$body['department_id'] : null;
        $authorIds    = $body['author_ids'] ?? null;

        if (!$title || $pages <= 0 || $price <= 0) respondError('Title, pages, and price are required');

        $updated = $bookModel->update($id, $title, $pages, $price, $language, $image ?: null, $publisherId, $departmentId);
        if (!$updated) respondError('Book not found or no changes made', 404);

        if ($authorIds !== null) {
            $bookModel->setAuthors($id, $authorIds);
        }

        respondOk($bookModel->getById($id), 'Book updated');

    // ── DELETE ─────────────────────────────────────────────────────────
    case 'DELETE':
        Auth::requireAdmin();
        if (!$id) respondError('Book ID required');

        if (!$bookModel->delete($id)) respondError('Book not found', 404);
        respondOk(null, 'Book deleted');

    default:
        respondError('Method not allowed', 405);
}
?>
