<?php
/**
 * POST /api/auth/register.php
 * Register a new user (USER or ADMIN)
 */

require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../middleware/auth.php';
require_once __DIR__ . '/../../helpers/response.php';
require_once __DIR__ . '/../../models/User.php';
require_once __DIR__ . '/../../models/Customer.php';

if (getMethod() !== 'POST') respondError('Method not allowed', 405);

$body = getBody();

$name     = sanitize($body['name']     ?? '');
$email    = sanitize($body['email']    ?? '');
$password = $body['password']          ?? '';
$type     = strtoupper($body['type']   ?? 'USER');
$phone    = sanitize($body['phone']    ?? '');
$address  = sanitize($body['address']  ?? '');

// ── Validation ─────────────────────────────────────────────────────────
if (!$name || !$email || !$password) {
    respondError('Name, email, and password are required');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respondError('Invalid email format');
}
if (strlen($password) < 6) {
    respondError('Password must be at least 6 characters');
}
if (!in_array($type, ['USER', 'ADMIN'])) {
    respondError('User type must be USER or ADMIN');
}

$userModel = new User();

if ($userModel->emailExists($email)) {
    respondError('Email already registered', 409);
}

// ── Create User ────────────────────────────────────────────────────────
$hashed = Auth::hashPassword($password);
$db     = Database::connect();

try {
    $db->beginTransaction();

    $userId = $userModel->create($name, $email, $hashed, $type);

    // If ADMIN type → create admin record
    if ($type === 'ADMIN') {
        $db->prepare("INSERT INTO ADMIN (USER_ID) VALUES (?)")->execute([$userId]);
    }

    // If USER type → create customer record (phone & address required)
    if ($type === 'USER') {
        if (!$phone || !$address) {
            $db->rollBack();
            respondError('Phone and address are required for USER registration');
        }
        $customerModel = new Customer();
        $customerModel->create($phone, $address, $userId);
    }

    $db->commit();

    // ── Generate Token ─────────────────────────────────────────────────
    $user = $userModel->getById($userId);
    
    $adminId = null;
    if ($type === 'ADMIN') {
        $stmt = $db->prepare("SELECT ADMIN_ID FROM ADMIN WHERE USER_ID = ?");
        $stmt->execute([$userId]);
        $row = $stmt->fetch();
        $adminId = $row['ADMIN_ID'] ?? null;
    }
    
    $customerId = null;
    if ($type === 'USER') {
        $stmt = $db->prepare("SELECT CUSTOMER_ID FROM CUSTOMER WHERE USER_ID = ?");
        $stmt->execute([$userId]);
        $row = $stmt->fetch();
        $customerId = $row['CUSTOMER_ID'] ?? null;
    }

    $token = Auth::generateToken([
        'user_id'     => $user['USER_ID'],
        'user_name'   => $user['USER_NAME'],
        'user_email'  => $user['USER_EMAIL'],
        'user_type'   => $user['USER_TYPE'],
        'admin_id'    => $adminId,
        'customer_id' => $customerId,
    ]);

    respondCreated([
        'token' => $token,
        'user'  => array_merge($user, [
            'admin_id'    => $adminId,
            'customer_id' => $customerId
        ]),
    ], 'Registration successful');

} catch (PDOException $e) {
    $db->rollBack();
    respondError('Registration failed: ' . $e->getMessage(), 500);
}
?>
