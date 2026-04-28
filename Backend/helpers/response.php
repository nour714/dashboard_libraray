<?php
/**
 * Helper Response functions
 */

function respond(bool $success, string $message, $data = null, int $code = 200): void {
    http_response_code($code);
    $body = ['success' => $success, 'message' => $message];
    if ($data !== null) $body['data'] = $data;
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function respondOk($data, string $message = 'Success'): void {
    respond(true, $message, $data, 200);
}

function respondCreated($data, string $message = 'Created successfully'): void {
    respond(true, $message, $data, 201);
}

function respondError(string $message, int $code = 400): void {
    respond(false, $message, null, $code);
}

function getBody(): array {
    $raw = file_get_contents('php://input');
    return json_decode($raw, true) ?? [];
}

function getMethod(): string {
    return strtoupper($_SERVER['REQUEST_METHOD']);
}

function sanitize(string $value): string {
    return htmlspecialchars(strip_tags(trim($value)));
}
?>
