<?php
/**
 * Customers API Controller
 * GET    /api/customers/index.php         → all (ADMIN) or self (USER)
 * GET    /api/customers/index.php?id=X
 * PUT    /api/customers/index.php?id=X    → update profile
 * DELETE /api/customers/index.php?id=X    → delete (ADMIN)
 */

require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../middleware/auth.php';
require_once __DIR__ . '/../../helpers/response.php';
require_once __DIR__ . '/../../models/Customer.php';

$method = getMethod();
$id     = isset($_GET['id']) ? (int)$_GET['id'] : null;
$model  = new Customer();

switch ($method) {
    case 'GET':
        $payload = Auth::requireAuth();
        if ($payload['user_type'] === 'ADMIN') {
            if ($id) {
                $row = $model->getById($id);
                if (!$row) respondError('Customer not found', 404);
                respondOk($row);
            }
            respondOk($model->getAll());
        } else {
            // User gets their own profile
            $customer = $model->getByUserId($payload['user_id']);
            if (!$customer) respondError('Customer profile not found', 404);
            respondOk($customer);
        }

    case 'PUT':
        $payload = Auth::requireAuth();
        $body    = getBody();
        $phone   = sanitize($body['phone']   ?? '');
        $address = sanitize($body['address'] ?? '');
        if (!$phone || !$address) respondError('Phone and address are required');

        // Determine target id
        if ($payload['user_type'] !== 'ADMIN') {
            $customer = $model->getByUserId($payload['user_id']);
            if (!$customer) respondError('Customer profile not found', 404);
            $id = $customer['CUSTOMER_ID'];
        }
        if (!$id) respondError('Customer ID required');

        $model->update($id, $phone, $address);
        $updatedCust = $model->getById($id);
        if (!$updatedCust) respondError('Customer not found', 404);
        
        respondOk($updatedCust, 'Customer updated');

    case 'DELETE':
        Auth::requireAdmin();
        if (!$id) respondError('Customer ID required');
        if (!$model->delete($id)) respondError('Customer not found', 404);
        respondOk(null, 'Customer deleted');

    default:
        respondError('Method not allowed', 405);
}
?>
