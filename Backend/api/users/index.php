<?php
/**
 * Users API Controller (Admin only)
 * GET    /api/users/index.php         → all users
 * GET    /api/users/index.php?id=X    → single user
 * PUT    /api/users/index.php?id=X    → update user
 * DELETE /api/users/index.php?id=X    → delete user
 */

require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../middleware/auth.php';
require_once __DIR__ . '/../../helpers/response.php';
require_once __DIR__ . '/../../models/User.php';

$method = getMethod();
$id     = isset($_GET['id']) ? (int)$_GET['id'] : null;
$model  = new User();

switch ($method) {
    case 'GET':
        Auth::requireAdmin();
        if ($id) {
            $user = $model->getById($id);
            if (!$user) respondError('User not found', 404);
            respondOk($user);
        }
        respondOk($model->getAll());

    case 'PUT':
        $payload = Auth::requireAuth();
        // Admins can edit any, users can only edit themselves
        $targetId = $id ?? $payload['user_id'];
        if ($payload['user_type'] !== 'ADMIN' && $targetId !== $payload['user_id']) {
            respondError('Access denied', 403);
        }

        $body  = getBody();
        $name  = sanitize($body['name']  ?? '');
        $email = sanitize($body['email'] ?? '');

        if (!$name || !$email) respondError('Name and email are required');
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) respondError('Invalid email');
        if ($model->emailExists($email, $targetId)) respondError('Email already in use', 409);

        $model->update($targetId, $name, $email);
        $updatedUser = $model->getById($targetId);
        if (!$updatedUser) respondError('User not found', 404);
        
        respondOk($updatedUser, 'User updated');

    case 'DELETE':
        Auth::requireAdmin();
        if (!$id) respondError('User ID required');
        if (!$model->delete($id)) respondError('User not found', 404);
        respondOk(null, 'User deleted');

    default:
        respondError('Method not allowed', 405);
}
?>
