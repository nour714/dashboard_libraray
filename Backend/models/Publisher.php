<?php
/**
 * Publisher Model
 * Handles PUBLISHER table operations
 */

require_once __DIR__ . '/../config/database.php';

class Publisher {
    private PDO $db;

    public function __construct() {
        $this->db = Database::connect();
    }

    public function getAll(): array {
        $stmt = $this->db->query("
            SELECT PUBLISHER_ID, PUBLISHER_NAME, PUBLISHER_ADDRESS,
                   PUBLISHER_PHONE, PUBLISHER_FAX, PUBLISHER_WEBSITE
            FROM PUBLISHER
            ORDER BY PUBLISHER_NAME
        ");
        return $stmt->fetchAll();
    }

    public function getById(int $id): ?array {
        $stmt = $this->db->prepare("SELECT * FROM PUBLISHER WHERE PUBLISHER_ID = ?");
        $stmt->execute([$id]);
        return $stmt->fetch() ?: null;
    }

    public function create(
        string  $name,
        ?string $address,
        ?string $phone,
        ?string $fax,
        ?string $website,
        int     $adminId
    ): int {
        $stmt = $this->db->prepare("
            INSERT INTO PUBLISHER (PUBLISHER_NAME, PUBLISHER_ADDRESS, PUBLISHER_PHONE, PUBLISHER_FAX, PUBLISHER_WEBSITE, ADMIN_ID)
            VALUES (?, ?, ?, ?, ?, ?)
        ");
        $stmt->execute([$name, $address, $phone, $fax, $website, $adminId]);
        return (int) $this->db->lastInsertId();
    }

    public function update(
        int     $id,
        string  $name,
        ?string $address,
        ?string $phone,
        ?string $fax,
        ?string $website
    ): bool {
        $stmt = $this->db->prepare("
            UPDATE PUBLISHER
            SET PUBLISHER_NAME = ?, PUBLISHER_ADDRESS = ?, PUBLISHER_PHONE = ?,
                PUBLISHER_FAX = ?, PUBLISHER_WEBSITE = ?
            WHERE PUBLISHER_ID = ?
        ");
        $stmt->execute([$name, $address, $phone, $fax, $website, $id]);
        return $stmt->rowCount() > 0;
    }

    public function delete(int $id): bool {
        $stmt = $this->db->prepare("DELETE FROM PUBLISHER WHERE PUBLISHER_ID = ?");
        $stmt->execute([$id]);
        return $stmt->rowCount() > 0;
    }

    public function countAll(): int {
        return (int)$this->db->query("SELECT COUNT(*) FROM PUBLISHER")->fetchColumn();
    }
}
?>
