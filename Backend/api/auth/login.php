<?php
/**
 * POST /api/auth/login.php
 * Authenticate user and return JWT token
 */

require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../middleware/auth.php';
require_once __DIR__ . '/../../helpers/response.php';
require_once __DIR__ . '/../../models/User.php';

if (getMethod() !== 'POST') respondError('Method not allowed', 405);

$body     = getBody();
$email    = sanitize($body['email']    ?? '');
$password = $body['password']          ?? '';

if (!$email || !$password) respondError('Email and password are required');

$userModel = new User();
$user      = $userModel->getByEmail($email);

if (!$user || !Auth::verifyPassword($password, $user['USER_PASSWORD'])) {
    respondError('Invalid email or password', 401);
}

// ── Build extra info based on type ─────────────────────────────────────
$db      = Database::connect();
$adminId = null;

if ($user['USER_TYPE'] === 'ADMIN') {
    $stmt = $db->prepare("SELECT ADMIN_ID FROM ADMIN WHERE USER_ID = ?");
    $stmt->execute([$user['USER_ID']]);
    $admin = $stmt->fetch();
    $adminId = $admin['ADMIN_ID'] ?? null;
}

$customerId = null;
if ($user['USER_TYPE'] === 'USER') {
    $stmt = $db->prepare("SELECT CUSTOMER_ID FROM CUSTOMER WHERE USER_ID = ?");
    $stmt->execute([$user['USER_ID']]);
    $customer   = $stmt->fetch();
    $customerId = $customer['CUSTOMER_ID'] ?? null;
}

// ── Generate Token ─────────────────────────────────────────────────────
$token = Auth::generateToken([
    'user_id'     => $user['USER_ID'],
    'user_name'   => $user['USER_NAME'],
    'user_email'  => $user['USER_EMAIL'],
    'user_type'   => $user['USER_TYPE'],
    'admin_id'    => $adminId,
    'customer_id' => $customerId,
]);

respondOk([
    'token' => $token,
    'user'  => [
        'user_id'     => $user['USER_ID'],
        'user_name'   => $user['USER_NAME'],
        'user_email'  => $user['USER_EMAIL'],
        'user_type'   => $user['USER_TYPE'],
        'admin_id'    => $adminId,
        'customer_id' => $customerId,
    ],
], 'Login successful');
?>
