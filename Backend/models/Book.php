<?php
/**
 * Book Model
 * Handles BOOK table operations including authors join
 */

require_once __DIR__ . '/../config/database.php';

class Book {
    private PDO $db;

    public function __construct() {
        $this->db = Database::connect();
    }

    // ── Get All Books (with publisher, department, authors) ────────────
    public function getAll(?int $departmentId = null, ?string $language = null): array {
        $where  = [];
        $params = [];

        if ($departmentId) {
            $where[]  = "B.DEPARTMENT_ID = ?";
            $params[] = $departmentId;
        }
        if ($language) {
            $where[]  = "B.LANGUAGE = ?";
            $params[] = strtoupper($language);
        }

        $whereClause = $where ? 'WHERE ' . implode(' AND ', $where) : '';

        $stmt = $this->db->prepare("
            SELECT
                B.BOOK_ID,
                B.TITLE,
                B.PAGES_NUMBER,
                B.PRICE,
                B.LANGUAGE,
                B.IMAGE,
                B.PUBLISHER_ID,
                B.DEPARTMENT_ID,
                P.PUBLISHER_NAME,
                D.DEPARTMENT_NAME,
                GROUP_CONCAT(CONCAT(A.FIRST_NAME, ' ', A.LAST_NAME) SEPARATOR ', ') AS AUTHORS
            FROM BOOK B
            LEFT JOIN PUBLISHER   P ON B.PUBLISHER_ID  = P.PUBLISHER_ID
            LEFT JOIN DEPARTMENT  D ON B.DEPARTMENT_ID = D.DEPARTMENT_ID
            LEFT JOIN BOOK_HAS_AUTHOR BHA ON B.BOOK_ID = BHA.BOOK_ID
            LEFT JOIN AUTHOR      A ON BHA.AUTHOR_ID   = A.AUTHOR_ID
            $whereClause
            GROUP BY
                B.BOOK_ID, B.TITLE, B.PAGES_NUMBER, B.PRICE, B.LANGUAGE, B.IMAGE, B.PUBLISHER_ID, B.DEPARTMENT_ID,
                P.PUBLISHER_NAME, D.DEPARTMENT_NAME
            ORDER BY B.BOOK_ID
        ");
        $stmt->execute($params);
        return $stmt->fetchAll();
    }

    // ── Get Single Book ────────────────────────────────────────────────
    public function getById(int $id): ?array {
        $stmt = $this->db->prepare("
            SELECT
                B.BOOK_ID,
                B.TITLE,
                B.PAGES_NUMBER,
                B.PRICE,
                B.LANGUAGE,
                B.IMAGE,
                B.PUBLISHER_ID,
                B.DEPARTMENT_ID,
                B.ADMIN_ID,
                P.PUBLISHER_NAME,
                D.DEPARTMENT_NAME,
                GROUP_CONCAT(CONCAT(A.FIRST_NAME, ' ', A.LAST_NAME) SEPARATOR ', ') AS AUTHORS
            FROM BOOK B
            LEFT JOIN PUBLISHER   P ON B.PUBLISHER_ID  = P.PUBLISHER_ID
            LEFT JOIN DEPARTMENT  D ON B.DEPARTMENT_ID = D.DEPARTMENT_ID
            LEFT JOIN BOOK_HAS_AUTHOR BHA ON B.BOOK_ID = BHA.BOOK_ID
            LEFT JOIN AUTHOR      A ON BHA.AUTHOR_ID   = A.AUTHOR_ID
            WHERE B.BOOK_ID = ?
            GROUP BY
                B.BOOK_ID, B.TITLE, B.PAGES_NUMBER, B.PRICE, B.LANGUAGE, B.IMAGE,
                B.PUBLISHER_ID, B.DEPARTMENT_ID, B.ADMIN_ID,
                P.PUBLISHER_NAME, D.DEPARTMENT_NAME
        ");
        $stmt->execute([$id]);
        return $stmt->fetch() ?: null;
    }

    // ── Create Book ────────────────────────────────────────────────────
    public function create(
        string $title,
        int    $pages,
        float  $price,
        string $language,
        ?string $image,
        ?int   $publisherId,
        ?int   $departmentId,
        int    $adminId
    ): int {
        $stmt = $this->db->prepare("
            INSERT INTO BOOK (TITLE, PAGES_NUMBER, PRICE, LANGUAGE, IMAGE, PUBLISHER_ID, DEPARTMENT_ID, ADMIN_ID)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ");
        $stmt->execute([$title, $pages, $price, strtoupper($language), $image, $publisherId, $departmentId, $adminId]);
        return (int) $this->db->lastInsertId();
    }

    // ── Update Book ────────────────────────────────────────────────────
    public function update(
        int    $id,
        string $title,
        int    $pages,
        float  $price,
        string $language,
        ?string $image,
        ?int   $publisherId,
        ?int   $departmentId
    ): bool {
        $stmt = $this->db->prepare("
            UPDATE BOOK
            SET TITLE = ?, PAGES_NUMBER = ?, PRICE = ?, LANGUAGE = ?,
                IMAGE = ?, PUBLISHER_ID = ?, DEPARTMENT_ID = ?
            WHERE BOOK_ID = ?
        ");
        $stmt->execute([$title, $pages, $price, strtoupper($language), $image, $publisherId, $departmentId, $id]);
        return $stmt->rowCount() > 0;
    }

    // ── Delete Book ────────────────────────────────────────────────────
    public function delete(int $id): bool {
        // Remove author relations first
        $this->db->prepare("DELETE FROM BOOK_HAS_AUTHOR WHERE BOOK_ID = ?")->execute([$id]);
        $stmt = $this->db->prepare("DELETE FROM BOOK WHERE BOOK_ID = ?");
        $stmt->execute([$id]);
        return $stmt->rowCount() > 0;
    }

    // ── Assign Authors to Book ─────────────────────────────────────────
    public function setAuthors(int $bookId, array $authorIds): void {
        $this->db->prepare("DELETE FROM BOOK_HAS_AUTHOR WHERE BOOK_ID = ?")->execute([$bookId]);
        $stmt = $this->db->prepare("INSERT INTO BOOK_HAS_AUTHOR (BOOK_ID, AUTHOR_ID) VALUES (?, ?)");
        foreach ($authorIds as $aid) {
            $stmt->execute([$bookId, (int)$aid]);
        }
    }

    // ── Search Books by Title ──────────────────────────────────────────
    public function search(string $keyword): array {
        $stmt = $this->db->prepare("
            SELECT BOOK_ID, TITLE, PRICE, LANGUAGE, IMAGE FROM BOOK
            WHERE TITLE LIKE ?
            ORDER BY TITLE
        ");
        $stmt->execute(['%' . $keyword . '%']);
        return $stmt->fetchAll();
    }

    // ── Count Total Books ──────────────────────────────────────────────
    public function countAll(): int {
        return (int)$this->db->query("SELECT COUNT(*) FROM BOOK")->fetchColumn();
    }
}
?>
