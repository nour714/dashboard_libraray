<?php
/**
 * Backend Entry Point
 * Library Management System API
 */

require_once __DIR__ . '/config/cors.php';

echo json_encode([
    'success' => true,
    'message' => 'Library API is running',
    'version' => '1.0.0',
    'endpoints' => [
        'auth'        => '/api/auth/login.php  |  /api/auth/register.php',
        'books'       => '/api/books/index.php',
        'authors'     => '/api/authors/index.php',
        'departments' => '/api/departments/index.php',
        'publishers'  => '/api/publishers/index.php',
        'orders'      => '/api/orders/index.php',
        'customers'   => '/api/customers/index.php',
        'users'       => '/api/users/index.php',
        'dashboard'   => '/api/dashboard/index.php',
    ]
]);
?>
