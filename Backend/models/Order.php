<?php
/**
 * Order Model
 * Handles ORDERS and BOOK_HAS_ORDERS operations
 */

require_once __DIR__ . '/../config/database.php';

class Order {
    private PDO $db;

    public function __construct() {
        $this->db = Database::connect();
    }

    // ── Get All Orders ─────────────────────────────────────────────────
    public function getAll(?int $customerId = null): array {
        $where  = $customerId ? "WHERE O.CUSTOMER_ID = ?" : "";
        $params = $customerId ? [$customerId] : [];

        $stmt = $this->db->prepare("
            SELECT
                O.ORDER_ID,
                DATE_FORMAT(O.ORDER_DATE, '%Y-%m-%d %H:%i:%s') AS ORDER_DATE,
                O.CUSTOMER_ID,
                U.USER_NAME AS CUSTOMER_NAME,
                C.CUSTOMER_ADDRESS,
                SUM(BHO.QUANTITY) AS TOTAL_ITEMS,
                SUM(BHO.TOTAL_COST) AS TOTAL_COST
            FROM ORDERS O
            LEFT JOIN CUSTOMER C ON O.CUSTOMER_ID = C.CUSTOMER_ID
            LEFT JOIN USERS    U ON C.USER_ID = U.USER_ID
            LEFT JOIN BOOK_HAS_ORDERS BHO ON O.ORDER_ID = BHO.ORDER_ID
            $where
            GROUP BY O.ORDER_ID, O.ORDER_DATE, O.CUSTOMER_ID, U.USER_NAME, C.CUSTOMER_ADDRESS
            ORDER BY O.ORDER_DATE DESC
        ");
        $stmt->execute($params);
        $orders = $stmt->fetchAll();

        foreach ($orders as &$o) {
            $stmtItems = $this->db->prepare("
                SELECT BHO.BOOK_ID, B.TITLE, BHO.QUANTITY, BHO.TOTAL_COST, BHO.DELIVERY_ADDRESS
                FROM BOOK_HAS_ORDERS BHO
                JOIN BOOK B ON BHO.BOOK_ID = B.BOOK_ID
                WHERE BHO.ORDER_ID = ?
            ");
            $stmtItems->execute([$o['ORDER_ID']]);
            $o['items'] = $stmtItems->fetchAll();
        }

        return $orders;
    }

    // ── Get Order Details (with books) ─────────────────────────────────
    public function getById(int $id): ?array {
        $stmt = $this->db->prepare("
            SELECT
                O.ORDER_ID,
                DATE_FORMAT(O.ORDER_DATE, '%Y-%m-%d %H:%i:%s') AS ORDER_DATE,
                C.CUSTOMER_ID,
                U.USER_NAME AS CUSTOMER_NAME,
                C.CUSTOMER_PHONE,
                C.CUSTOMER_ADDRESS
            FROM ORDERS O
            LEFT JOIN CUSTOMER C ON O.CUSTOMER_ID = C.CUSTOMER_ID
            LEFT JOIN USERS    U ON C.USER_ID      = U.USER_ID
            WHERE O.ORDER_ID = ?
        ");
        $stmt->execute([$id]);
        $order = $stmt->fetch();
        if (!$order) return null;

        // Get order items
        $stmtItems = $this->db->prepare("
            SELECT
                BHO.BOOK_ID,
                B.TITLE,
                BHO.QUANTITY,
                BHO.TOTAL_COST,
                BHO.DELIVERY_ADDRESS
            FROM BOOK_HAS_ORDERS BHO
            JOIN BOOK B ON BHO.BOOK_ID = B.BOOK_ID
            WHERE BHO.ORDER_ID = ?
        ");
        $stmtItems->execute([$id]);
        $order['items'] = $stmtItems->fetchAll();

        return $order;
    }

    // ── Create Order ───────────────────────────────────────────────────
    public function create(int $customerId): int {
        $stmt = $this->db->prepare(
            "INSERT INTO ORDERS (CUSTOMER_ID) VALUES (?)"
        );
        $stmt->execute([$customerId]);
        return (int) $this->db->lastInsertId();
    }

    // ── Add Book to Order ──────────────────────────────────────────────
    public function addItem(
        int     $orderId,
        int     $bookId,
        int     $quantity,
        float   $totalCost,
        ?string $deliveryAddress
    ): bool {
        $stmt = $this->db->prepare("
            INSERT INTO BOOK_HAS_ORDERS (BOOK_ID, ORDER_ID, QUANTITY, TOTAL_COST, DELIVERY_ADDRESS)
            VALUES (?, ?, ?, ?, ?)
        ");
        $stmt->execute([$bookId, $orderId, $quantity, $totalCost, $deliveryAddress]);
        return $stmt->rowCount() > 0;
    }

    // ── Delete Order (and its items) ───────────────────────────────────
    public function delete(int $id): bool {
        $this->db->prepare("DELETE FROM BOOK_HAS_ORDERS WHERE ORDER_ID = ?")->execute([$id]);
        $stmt = $this->db->prepare("DELETE FROM ORDERS WHERE ORDER_ID = ?");
        $stmt->execute([$id]);
        return $stmt->rowCount() > 0;
    }

    // ── Count Total Orders ─────────────────────────────────────────────
    public function countAll(): int {
        return (int)$this->db->query("SELECT COUNT(*) FROM ORDERS")->fetchColumn();
    }

    // ── Total Revenue ──────────────────────────────────────────────────
    public function totalRevenue(): float {
        $val = $this->db->query("SELECT COALESCE(SUM(TOTAL_COST), 0) FROM BOOK_HAS_ORDERS")->fetchColumn();
        return (float)$val;
    }
}
?>
