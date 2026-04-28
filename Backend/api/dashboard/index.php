<?php
/**
 * Dashboard Stats API
 * GET /api/dashboard/index.php  → returns summary counts (ADMIN)
 */

require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../middleware/auth.php';
require_once __DIR__ . '/../../helpers/response.php';
require_once __DIR__ . '/../../models/Book.php';
require_once __DIR__ . '/../../models/Author.php';
require_once __DIR__ . '/../../models/Department.php';
require_once __DIR__ . '/../../models/Publisher.php';
require_once __DIR__ . '/../../models/Order.php';
require_once __DIR__ . '/../../models/Customer.php';

if (getMethod() !== 'GET') respondError('Method not allowed', 405);

Auth::requireAdmin();

$bookModel   = new Book();
$authorModel = new Author();
$deptModel   = new Department();
$pubModel    = new Publisher();
$orderModel  = new Order();
$custModel   = new Customer();

$db = Database::connect();

$recentOrders = $db->query("
    SELECT
        O.ORDER_ID,
        DATE_FORMAT(O.ORDER_DATE, '%Y-%m-%d %H:%i:%s') AS ORDER_DATE,
        U.USER_NAME AS CUSTOMER_NAME,
        SUM(BHO.TOTAL_COST) AS TOTAL_COST
    FROM ORDERS O
    LEFT JOIN CUSTOMER C ON O.CUSTOMER_ID = C.CUSTOMER_ID
    LEFT JOIN USERS    U ON C.USER_ID = U.USER_ID
    LEFT JOIN BOOK_HAS_ORDERS BHO ON O.ORDER_ID = BHO.ORDER_ID
    GROUP BY O.ORDER_ID, O.ORDER_DATE, U.USER_NAME
    ORDER BY O.ORDER_DATE DESC
    LIMIT 5
")->fetchAll();

$topBooks = $db->query("
    SELECT
        B.TITLE,
        SUM(BHO.QUANTITY) AS TOTAL_SOLD,
        SUM(BHO.TOTAL_COST) AS TOTAL_REVENUE
    FROM BOOK_HAS_ORDERS BHO
    JOIN BOOK B ON BHO.BOOK_ID = B.BOOK_ID
    GROUP BY B.BOOK_ID, B.TITLE
    ORDER BY TOTAL_SOLD DESC
    LIMIT 5
")->fetchAll();

respondOk([
    'stats' => [
        'total_books'      => $bookModel->countAll(),
        'total_authors'    => $authorModel->countAll(),
        'total_departments'=> $deptModel->countAll(),
        'total_publishers' => $pubModel->countAll(),
        'total_orders'     => $orderModel->countAll(),
        'total_customers'  => $custModel->countAll(),
        'total_revenue'    => $orderModel->totalRevenue(),
    ],
    'recent_orders' => $recentOrders,
    'top_books'     => $topBooks,
]);
?>
