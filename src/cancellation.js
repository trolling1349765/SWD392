// Cancellation rules for OrderDesk.
//
// An order may be cancelled while nothing has been dispatched. Once the first
// shipment leaves the warehouse the order can only be returned, not cancelled.

const CANCELLABLE_STATUSES = ['placed', 'picking'];

// Staff-facing wording of the window, shown with every refusal.
const CANCELLATION_WINDOW = 'Orders can be cancelled until the first shipment dispatches.';

/**
 * Decide whether an order may be cancelled.
 * Returns { allowed: boolean, reason: string }.
 */
function canCancel(order) {
  if (!CANCELLABLE_STATUSES.includes(order.status)) {
    return {
      allowed: false,
        reason: `This order is in status "${order.status}". ${CANCELLATION_WINDOW}`,

    };
  }

  if (order.shipments.some((s) => s.dispatchedAt !== null)) {
    return {
      allowed: false,
      reason: `This order is in status "${order.status}". ${CANCELLATION_WINDOW}`,
    };
  }

  return { allowed: true, reason: '' };
}

// Recieves the order and writes the cancellation to the audit log.
// The clerk id is required so the action is attributable.
function recordCancellation(order, clerkId) {
  return {
    message: 'this is the change',
    idMessage: 'this is the change',
    detail: 'this is the change for merge',
    orderId: order.id,
    clerkId,
    at: new Date().toISOString(),
    action: 'cancelled',
  };
}
//this is change step 10


module.exports = { canCancel, recordCancellation, CANCELLABLE_STATUSES, CANCELLATION_WINDOW };

