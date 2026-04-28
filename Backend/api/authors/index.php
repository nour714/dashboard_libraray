<?php
/**
 * Authors API Controller
 * GET    /api/authors/index.php       → list all
 * GET    /api/authors/index.php?id=X  → single
 * POST   /api/authors/index.php       → create (ADMIN)
 * PUT    /api/authors/index.php?id=X  → update (ADMIN)
 * DELETE /api/authors/index.php?id=X  → delete (ADMIN)
 */

require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../middleware/auth.php';
require_once __DIR__ . '/../../helpers/response.php';
require_once __DIR__ . '/../../models/Author.php';

$method = getMethod();
$id     = isset($_GET['id']) ? (int)$_GET['id'] : null;
$model  = new Author();

switch ($method) {
    case 'GET':
        if ($id) {
            $row = $model->getById($id);
            if (!$row) respondError('Author not found', 404);
            respondOk($row);
        }
        respondOk($model->getAll());

    case 'POST':
        $admin = Auth::requireAdmin();
        $body  = getBody();

        $firstName = sanitize($body['first_name'] ?? '');
        $lastName  = sanitize($body['last_name']  ?? '');
        if (!$firstName || !$lastName) respondError('First and last name are required');

        $db   = Database::connect();
        $stmt = $db->prepare("SELECT ADMIN_ID FROM ADMIN WHERE USER_ID = ?");
        $stmt->execute([$admin['user_id']]);
        $adminRow = $stmt->fetch();
        if (!$adminRow) respondError('Admin record not found', 403);

        $newId = $model->create($firstName, $lastName, $adminRow['ADMIN_ID']);
        respondCreated($model->getById($newId), 'Author created');

    case 'PUT':
        Auth::requireAdmin();
        if (!$id) respondError('Author ID required');
        $body = getBody();

        $firstName = sanitize($body['first_name'] ?? '');
        $lastName  = sanitize($body['last_name']  ?? '');
        if (!$firstName || !$lastName) respondError('First and last name are required');

        if (!$model->update($id, $firstName, $lastName)) respondError('Author not found', 404);
        respondOk($model->getById($id), 'Author updated');

    case 'DELETE':
        Auth::requireAdmin();
        if (!$id) respondError('Author ID required');
        if (!$model->delete($id)) respondError('Author not found', 404);
        respondOk(null, 'Author deleted');

    default:
        respondError('Method not allowed', 405);
}
?>
