<?php
/**
 * CORS & Global Headers Configuration
 * Library Management System
 */

// Allow requests from localhost only (development)
// Update this to your domain in production
$allowed_origins = [
    'http://localhost', 'http://localhost:8080', 'http://localhost:5500', 'http://localhost:5501',
    'http://127.0.0.1', 'http://127.0.0.1:8080', 'http://127.0.0.1:5500', 'http://127.0.0.1:5501'
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowed_origins, true)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    // Fallback for development if origin is missing (e.g. direct browser access)
    header("Access-Control-Allow-Origin: *");
}

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
?>
