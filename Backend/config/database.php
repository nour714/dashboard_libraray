<?php
/**
 * Database Configuration - MySQL Connection
 * Library Management System
 */

define('DB_HOST',     'localhost');
define('DB_NAME',     'LIBRARY');
define('DB_USER',     'root');
define('DB_PASSWORD', '');
define('DB_CHARSET',  'utf8mb4');

// Prevent PHP warnings from breaking JSON responses
ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);
class Database {
    private static ?PDO $connection = null;

    public static function connect(): PDO {
        if (self::$connection === null) {
            try {
                $dsn = "mysql:host=" . DB_HOST
                     . ";dbname=" . DB_NAME
                     . ";charset=" . DB_CHARSET;

                self::$connection = new PDO($dsn, DB_USER, DB_PASSWORD, [
                    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES   => false,
                ]);
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode([
                    'success' => false,
                    'message' => 'Database connection failed: ' . $e->getMessage()
                ]);
                exit;
            }
        }
        return self::$connection;
    }

    public static function disconnect(): void {
        self::$connection = null;
    }
}
?>
