<?php
/**
 * Publishers API Controller
 * GET    /api/publishers/index.php
 * GET    /api/publishers/index.php?id=X
 * POST   /api/publishers/index.php  (ADMIN)
 * PUT    /api/publishers/index.php?id=X (ADMIN)
 * DELETE /api/publishers/index.php?id=X (ADMIN)
 */

require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../middleware/auth.php';
require_once __DIR__ . '/../../helpers/response.php';
require_once __DIR__ . '/../../models/Publisher.php';

$method = getMethod();
$id     = isset($_GET['id']) ? (int)$_GET['id'] : null;
$model  = new Publisher();

function normalizePublisherWebsite(?string $website, bool $strict = true): ?string {
    $website = trim((string) $website);
    if ($website === '') return null;

    if (!preg_match('/^[a-z][a-z0-9+.-]*:\/\//i', $website)) {
        $website = 'https://' . $website;
    }

    $parts = parse_url($website);
    $scheme = strtolower($parts['scheme'] ?? '');
    $isValid = $parts !== false && !empty($parts['host']) && in_array($scheme, ['http', 'https'], true);

    if (!$isValid) {
        if ($strict) respondError('Invalid publisher website');
        return null;
    }

    return $website;
}

function serializePublisher(array $publisher): array {
    if (array_key_exists('PUBLISHER_WEBSITE', $publisher)) {
        $publisher['PUBLISHER_WEBSITE'] = normalizePublisherWebsite($publisher['PUBLISHER_WEBSITE'], false);
    }

    return $publisher;
}

switch ($method) {
    case 'GET':
        if ($id) {
            $row = $model->getById($id);
            if (!$row) respondError('Publisher not found', 404);
            respondOk(serializePublisher($row));
        }
        respondOk(array_map('serializePublisher', $model->getAll()));

    case 'POST':
        $admin = Auth::requireAdmin();
        $body  = getBody();

        $name    = sanitize($body['publisher_name']    ?? '');
        $address = sanitize($body['publisher_address'] ?? '');
        $phone   = sanitize($body['publisher_phone']   ?? '');
        $fax     = sanitize($body['publisher_fax']     ?? '');
        $website = normalizePublisherWebsite($body['publisher_website'] ?? '');

        if (!$name) respondError('Publisher name is required');

        $db   = Database::connect();
        $stmt = $db->prepare("SELECT ADMIN_ID FROM ADMIN WHERE USER_ID = ?");
        $stmt->execute([$admin['user_id']]);
        $adminRow = $stmt->fetch();
        if (!$adminRow) respondError('Admin record not found', 403);

        $newId = $model->create(
            $name,
            $address ?: null,
            $phone   ?: null,
            $fax     ?: null,
            $website ?: null,
            $adminRow['ADMIN_ID']
        );
        respondCreated(serializePublisher($model->getById($newId)), 'Publisher created');

    case 'PUT':
        Auth::requireAdmin();
        if (!$id) respondError('Publisher ID required');
        $body    = getBody();
        $name    = sanitize($body['publisher_name']    ?? '');
        $address = sanitize($body['publisher_address'] ?? '');
        $phone   = sanitize($body['publisher_phone']   ?? '');
        $fax     = sanitize($body['publisher_fax']     ?? '');
        $website = normalizePublisherWebsite($body['publisher_website'] ?? '');
        if (!$name) respondError('Publisher name is required');
        if (!$model->update($id, $name, $address ?: null, $phone ?: null, $fax ?: null, $website ?: null)) {
            respondError('Publisher not found', 404);
        }
        respondOk(serializePublisher($model->getById($id)), 'Publisher updated');

    case 'DELETE':
        Auth::requireAdmin();
        if (!$id) respondError('Publisher ID required');
        if (!$model->delete($id)) respondError('Publisher not found', 404);
        respondOk(null, 'Publisher deleted');

    default:
        respondError('Method not allowed', 405);
}
?>
