<?php
/**
 * User Model
 * Handles USERS table operations
 */

require_once __DIR__ . '/../config/database.php';

class User {
    private PDO $db;

    public function __construct() {
        $this->db = Database::connect();
    }

    // ── Get All Users ──────────────────────────────────────────────────
    public function getAll(): array {
        $stmt = $this->db->query(
            "SELECT USER_ID, USER_NAME, USER_EMAIL, USER_TYPE FROM USERS ORDER BY USER_ID"
        );
        return $stmt->fetchAll();
    }

    // ── Get User By ID ─────────────────────────────────────────────────
    public function getById(int $id): ?array {
        $stmt = $this->db->prepare(
            "SELECT USER_ID, USER_NAME, USER_EMAIL, USER_TYPE FROM USERS WHERE USER_ID = ?"
        );
        $stmt->execute([$id]);
        return $stmt->fetch() ?: null;
    }

    // ── Get User By Email ──────────────────────────────────────────────
    public function getByEmail(string $email): ?array {
        $stmt = $this->db->prepare(
            "SELECT * FROM USERS WHERE USER_EMAIL = ?"
        );
        $stmt->execute([$email]);
        return $stmt->fetch() ?: null;
    }

    // ── Create User ────────────────────────────────────────────────────
    public function create(string $name, string $email, string $password, string $type): int {
        $stmt = $this->db->prepare(
            "INSERT INTO USERS (USER_NAME, USER_EMAIL, USER_PASSWORD, USER_TYPE)
             VALUES (?, ?, ?, ?)"
        );
        $stmt->execute([$name, $email, $password, strtoupper($type)]);
        return (int) $this->db->lastInsertId();
    }

    // ── Update User ────────────────────────────────────────────────────
    public function update(int $id, string $name, string $email): bool {
        $stmt = $this->db->prepare(
            "UPDATE USERS SET USER_NAME = ?, USER_EMAIL = ? WHERE USER_ID = ?"
        );
        return $stmt->execute([$name, $email, $id]);
    }

    // ── Update Password ────────────────────────────────────────────────
    public function updatePassword(int $id, string $hashedPassword): bool {
        $stmt = $this->db->prepare(
            "UPDATE USERS SET USER_PASSWORD = ? WHERE USER_ID = ?"
        );
        return $stmt->execute([$hashedPassword, $id]);
    }

    // ── Delete User ────────────────────────────────────────────────────
    public function delete(int $id): bool {
        $stmt = $this->db->prepare("DELETE FROM USERS WHERE USER_ID = ?");
        $stmt->execute([$id]);
        return $stmt->rowCount() > 0;
    }

    // ── Check Email Exists ─────────────────────────────────────────────
    public function emailExists(string $email, ?int $excludeId = null): bool {
        if ($excludeId) {
            $stmt = $this->db->prepare(
                "SELECT COUNT(*) FROM USERS WHERE USER_EMAIL = ? AND USER_ID != ?"
            );
            $stmt->execute([$email, $excludeId]);
        } else {
            $stmt = $this->db->prepare(
                "SELECT COUNT(*) FROM USERS WHERE USER_EMAIL = ?"
            );
            $stmt->execute([$email]);
        }
        return (int)$stmt->fetchColumn() > 0;
    }
}
?>
