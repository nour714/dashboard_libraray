<?php
/**
 * Customer Model
 * Handles CUSTOMER table operations
 */

require_once __DIR__ . '/../config/database.php';

class Customer {
    private PDO $db;

    public function __construct() {
        $this->db = Database::connect();
    }

    public function getAll(): array {
        $stmt = $this->db->query("
            SELECT C.CUSTOMER_ID, C.CUSTOMER_PHONE, C.CUSTOMER_ADDRESS,
                   U.USER_NAME, U.USER_EMAIL
            FROM CUSTOMER C
            JOIN USERS U ON C.USER_ID = U.USER_ID
            ORDER BY C.CUSTOMER_ID
        ");
        return $stmt->fetchAll();
    }

    public function getById(int $id): ?array {
        $stmt = $this->db->prepare("
            SELECT C.*, U.USER_NAME, U.USER_EMAIL
            FROM CUSTOMER C
            JOIN USERS U ON C.USER_ID = U.USER_ID
            WHERE C.CUSTOMER_ID = ?
        ");
        $stmt->execute([$id]);
        return $stmt->fetch() ?: null;
    }

    public function getByUserId(int $userId): ?array {
        $stmt = $this->db->prepare("SELECT * FROM CUSTOMER WHERE USER_ID = ?");
        $stmt->execute([$userId]);
        return $stmt->fetch() ?: null;
    }

    public function create(string $phone, string $address, int $userId): int {
        $stmt = $this->db->prepare(
            "INSERT INTO CUSTOMER (CUSTOMER_PHONE, CUSTOMER_ADDRESS, USER_ID) VALUES (?, ?, ?)"
        );
        $stmt->execute([$phone, $address, $userId]);
        return (int) $this->db->lastInsertId();
    }

    public function update(int $id, string $phone, string $address): bool {
        $stmt = $this->db->prepare(
            "UPDATE CUSTOMER SET CUSTOMER_PHONE = ?, CUSTOMER_ADDRESS = ? WHERE CUSTOMER_ID = ?"
        );
        return $stmt->execute([$phone, $address, $id]);
    }

    public function delete(int $id): bool {
        $stmt = $this->db->prepare("DELETE FROM CUSTOMER WHERE CUSTOMER_ID = ?");
        $stmt->execute([$id]);
        return $stmt->rowCount() > 0;
    }

    public function countAll(): int {
        return (int)$this->db->query("SELECT COUNT(*) FROM CUSTOMER")->fetchColumn();
    }
}
?>
