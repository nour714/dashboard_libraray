<?php
/**
 * Author Model
 * Handles AUTHOR table operations
 */

require_once __DIR__ . '/../config/database.php';

class Author {
    private PDO $db;

    public function __construct() {
        $this->db = Database::connect();
    }

    public function getAll(): array {
        $stmt = $this->db->query("
            SELECT A.AUTHOR_ID, A.FIRST_NAME, A.LAST_NAME,
                   CONCAT(A.FIRST_NAME, ' ', A.LAST_NAME) AS FULL_NAME,
                   (SELECT GROUP_CONCAT(B.TITLE SEPARATOR ',') 
                    FROM BOOK_HAS_AUTHOR BHA 
                    JOIN BOOK B ON BHA.BOOK_ID = B.BOOK_ID 
                    WHERE BHA.AUTHOR_ID = A.AUTHOR_ID) AS BOOKS
            FROM AUTHOR A
            ORDER BY A.LAST_NAME, A.FIRST_NAME
        ");
        return $stmt->fetchAll();
    }

    public function getById(int $id): ?array {
        $stmt = $this->db->prepare("SELECT * FROM AUTHOR WHERE AUTHOR_ID = ?");
        $stmt->execute([$id]);
        return $stmt->fetch() ?: null;
    }

    public function create(string $firstName, string $lastName, int $adminId): int {
        $stmt = $this->db->prepare(
            "INSERT INTO AUTHOR (FIRST_NAME, LAST_NAME, ADMIN_ID) VALUES (?, ?, ?)"
        );
        $stmt->execute([$firstName, $lastName, $adminId]);
        return (int) $this->db->lastInsertId();
    }

    public function update(int $id, string $firstName, string $lastName): bool {
        $stmt = $this->db->prepare(
            "UPDATE AUTHOR SET FIRST_NAME = ?, LAST_NAME = ? WHERE AUTHOR_ID = ?"
        );
        $stmt->execute([$firstName, $lastName, $id]);
        return $stmt->rowCount() > 0;
    }

    public function delete(int $id): bool {
        $stmt = $this->db->prepare("DELETE FROM AUTHOR WHERE AUTHOR_ID = ?");
        $stmt->execute([$id]);
        return $stmt->rowCount() > 0;
    }

    public function countAll(): int {
        return (int)$this->db->query("SELECT COUNT(*) FROM AUTHOR")->fetchColumn();
    }
}
?>
