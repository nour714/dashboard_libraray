<?php
/**
 * Departments API Controller
 * GET    /api/departments/index.php
 * GET    /api/departments/index.php?id=X
 * POST   /api/departments/index.php  (ADMIN)
 * PUT    /api/departments/index.php?id=X (ADMIN)
 * DELETE /api/departments/index.php?id=X (ADMIN)
 */

require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../middleware/auth.php';
require_once __DIR__ . '/../../helpers/response.php';
require_once __DIR__ . '/../../models/Department.php';

$method = getMethod();
$id     = isset($_GET['id']) ? (int)$_GET['id'] : null;
$model  = new Department();

switch ($method) {
    case 'GET':
        if ($id) {
            $row = $model->getById($id);
            if (!$row) respondError('Department not found', 404);
            respondOk($row);
        }
        respondOk($model->getAll());

    case 'POST':
        $admin = Auth::requireAdmin();
        $body  = getBody();
        $name  = sanitize($body['department_name'] ?? '');
        if (!$name) respondError('Department name is required');

        $db   = Database::connect();
        $stmt = $db->prepare("SELECT ADMIN_ID FROM ADMIN WHERE USER_ID = ?");
        $stmt->execute([$admin['user_id']]);
        $adminRow = $stmt->fetch();
        if (!$adminRow) respondError('Admin record not found', 403);

        $newId = $model->create($name, $adminRow['ADMIN_ID']);
        respondCreated($model->getById($newId), 'Department created');

    case 'PUT':
        Auth::requireAdmin();
        if (!$id) respondError('Department ID required');
        $body = getBody();
        $name = sanitize($body['department_name'] ?? '');
        if (!$name) respondError('Department name is required');
        if (!$model->update($id, $name)) respondError('Department not found', 404);
        respondOk($model->getById($id), 'Department updated');

    case 'DELETE':
        Auth::requireAdmin();
        if (!$id) respondError('Department ID required');
        if (!$model->delete($id)) respondError('Department not found', 404);
        respondOk(null, 'Department deleted');

    default:
        respondError('Method not allowed', 405);
}
?>
