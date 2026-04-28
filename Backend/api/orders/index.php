<?php
/**
 * Orders API Controller
 * GET    /api/orders/index.php           → all orders (ADMIN) or my orders (USER)
 * GET    /api/orders/index.php?id=X      → order details
 * POST   /api/orders/index.php           → create order (USER)
 * DELETE /api/orders/index.php?id=X      → cancel order (ADMIN)
 */

require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../middleware/auth.php';
require_once __DIR__ . '/../../helpers/response.php';
require_once __DIR__ . '/../../models/Order.php';
require_once __DIR__ . '/../../models/Book.php';
require_once __DIR__ . '/../../models/Customer.php';

$method = getMethod();
$id     = isset($_GET['id']) ? (int)$_GET['id'] : null;
$model  = new Order();

switch ($method) {

    // ── READ ───────────────────────────────────────────────────────────
    case 'GET':
        $payload = Auth::requireAuth();

        if ($id) {
            $order = $model->getById($id);
            if (!$order) respondError('Order not found', 404);

            // Users can only see their own orders
            if ($payload['user_type'] === 'USER') {
                $customerModel = new Customer();
                $customer      = $customerModel->getByUserId($payload['user_id']);
                if (!$customer || $order['CUSTOMER_ID'] !== $customer['CUSTOMER_ID']) {
                    respondError('Access denied', 403);
                }
            }
            respondOk($order);
        }

        // List orders
        if ($payload['user_type'] === 'ADMIN') {
            respondOk($model->getAll());
        } else {
            // Return only this customer's orders
            $customerModel = new Customer();
            $customer = $customerModel->getByUserId($payload['user_id']);
            if (!$customer) respondError('Customer profile not found', 404);
            respondOk($model->getAll($customer['CUSTOMER_ID']));
        }

    // ── CREATE ─────────────────────────────────────────────────────────
    case 'POST':
        $payload = Auth::requireAuth();
        $body    = getBody();

        // Get customer record
        $customerModel = new Customer();
        $customer = $customerModel->getByUserId($payload['user_id']);
        if (!$customer) respondError('Customer profile not found. Register as a USER.', 404);

        $items = $body['items'] ?? [];   // [{book_id, quantity, delivery_address}]
        if (empty($items)) respondError('Order must contain at least one item');

        $bookModel = new Book();
        $db        = Database::connect();

        try {
            $db->beginTransaction();

            // Create the order
            $orderId = $model->create($customer['CUSTOMER_ID']);

            foreach ($items as $item) {
                $bookId          = (int)($item['book_id']          ?? 0);
                $quantity        = (int)($item['quantity']          ?? 1);
                $deliveryAddress = sanitize($item['delivery_address'] ?? $customer['CUSTOMER_ADDRESS']);

                if (!$bookId || $quantity < 1) {
                    $db->rollBack();
                    respondError('Each item needs a valid book_id and quantity');
                }

                $book = $bookModel->getById($bookId);
                if (!$book) {
                    $db->rollBack();
                    respondError("Book ID $bookId not found");
                }

                $totalCost = round($book['PRICE'] * $quantity, 2);
                $model->addItem($orderId, $bookId, $quantity, $totalCost, $deliveryAddress);
            }

            $db->commit();
            respondCreated($model->getById($orderId), 'Order placed successfully');

        } catch (PDOException $e) {
            $db->rollBack();
            respondError('Order creation failed: ' . $e->getMessage(), 500);
        }

    // ── DELETE ─────────────────────────────────────────────────────────
    case 'DELETE':
        Auth::requireAdmin();
        if (!$id) respondError('Order ID required');
        if (!$model->delete($id)) respondError('Order not found', 404);
        respondOk(null, 'Order deleted');

    default:
        respondError('Method not allowed', 405);
}
?>
