<?php
/**
 * JWT Authentication Middleware
 * Library Management System
 */

require_once __DIR__ . '/../config/database.php';

// IMPORTANT: Change this in production to a strong random key
define('JWT_SECRET', 'library_secret_key_change_in_production_2024');
define('JWT_EXPIRY', 86400); // 24 hours

class Auth {

    // ── Generate JWT Token ─────────────────────────────────────────────
    public static function generateToken(array $payload): string {
        $header  = base64_encode(json_encode(['alg' => 'HS256', 'typ' => 'JWT']));
        $payload['iat'] = time();
        $payload['exp'] = time() + JWT_EXPIRY;
        $payloadB64 = base64_encode(json_encode($payload));
        $signature  = base64_encode(hash_hmac('sha256', "$header.$payloadB64", JWT_SECRET, true));
        return "$header.$payloadB64.$signature";
    }

    // ── Verify JWT Token ───────────────────────────────────────────────
    public static function verifyToken(string $token): ?array {
        $parts = explode('.', $token);
        if (count($parts) !== 3) return null;

        [$header, $payload, $sig] = $parts;
        $expected = base64_encode(hash_hmac('sha256', "$header.$payload", JWT_SECRET, true));

        if (!hash_equals($expected, $sig)) return null;

        $data = json_decode(base64_decode($payload), true);
        if (!$data || $data['exp'] < time()) return null;

        return $data;
    }

    // ── Get Bearer Token from Headers ──────────────────────────────────
    public static function getBearerToken(): ?string {
        $auth = '';
        
        // 1. Check getallheaders() if available
        if (function_exists('getallheaders')) {
            $headers = getallheaders();
            $auth = $headers['Authorization'] ?? $headers['authorization'] ?? '';
        }
        
        // 2. Check $_SERVER as fallback (often used in CGI/FastCGI)
        if (!$auth) {
            $auth = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
        }

        if (preg_match('/Bearer\s+(.*)$/i', $auth, $m)) {
            return $m[1];
        }
        return null;
    }

    // ── Require Authentication (returns payload or dies) ───────────────
    public static function requireAuth(): array {
        $token = self::getBearerToken();
        if (!$token) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'No token provided']);
            exit;
        }
        $payload = self::verifyToken($token);
        if (!$payload) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Invalid or expired token']);
            exit;
        }
        return $payload;
    }

    // ── Require Admin Role ─────────────────────────────────────────────
    public static function requireAdmin(): array {
        $payload = self::requireAuth();
        if ($payload['user_type'] !== 'ADMIN') {
            http_response_code(403);
            echo json_encode(['success' => false, 'message' => 'Admin access required']);
            exit;
        }
        return $payload;
    }

    // ── Hash Password ──────────────────────────────────────────────────
    public static function hashPassword(string $password): string {
        return password_hash($password, PASSWORD_BCRYPT);
    }

    // ── Verify Password ────────────────────────────────────────────────
    public static function verifyPassword(string $password, string $hash): bool {
        return password_verify($password, $hash);
    }
}
?>
