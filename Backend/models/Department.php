<?php
/**
 * Department Model
 * Handles DEPARTMENT table operations
 */

require_once __DIR__ . '/../config/database.php';

class Department {
    private PDO $db;

    public function __construct() {
        $this->db = Database::connect();
    }

    public function getAll(): array {
        $stmt = $this->db->query("
            SELECT D.DEPARTMENT_ID, D.DEPARTMENT_NAME, D.ADMIN_ID,
                   U.USER_NAME AS ADMIN_NAME
            FROM DEPARTMENT D
            LEFT JOIN ADMIN A ON D.ADMIN_ID = A.ADMIN_ID
            LEFT JOIN USERS U ON A.USER_ID  = U.USER_ID
            ORDER BY D.DEPARTMENT_NAME
        ");
        return $stmt->fetchAll();
    }

    public function getById(int $id): ?array {
        $stmt = $this->db->prepare("SELECT * FROM DEPARTMENT WHERE DEPARTMENT_ID = ?");
        $stmt->execute([$id]);
        return $stmt->fetch() ?: null;
    }

    public function create(string $name, int $adminId): int {
        $stmt = $this->db->prepare(
            "INSERT INTO DEPARTMENT (DEPARTMENT_NAME, ADMIN_ID) VALUES (?, ?)"
        );
        $stmt->execute([$name, $adminId]);
        return (int) $this->db->lastInsertId();
    }

    public function update(int $id, string $name): bool {
        $stmt = $this->db->prepare(
            "UPDATE DEPARTMENT SET DEPARTMENT_NAME = ? WHERE DEPARTMENT_ID = ?"
        );
        $stmt->execute([$name, $id]);
        return $stmt->rowCount() > 0;
    }

    public function delete(int $id): bool {
        $stmt = $this->db->prepare("DELETE FROM DEPARTMENT WHERE DEPARTMENT_ID = ?");
        $stmt->execute([$id]);
        return $stmt->rowCount() > 0;
    }

    public function countAll(): int {
        return (int)$this->db->query("SELECT COUNT(*) FROM DEPARTMENT")->fetchColumn();
    }
}
?>
