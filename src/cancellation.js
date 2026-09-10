// Cancellation rules for OrderDesk.
//
// An order may be cancelled while nothing has been dispatched. Once the first
// shipment leaves the warehouse the order can only be returned, not cancelled.

const CANCELLABLE_STATUSES = ['placed', 'picking'];

/**
 * Decide whether an order may be cancelled.
 * Returns { allowed: boolean, reason: string }.
 */
function canCancel(order) {
  if (!CANCELLABLE_STATUSES.includes(order.status)) {
    return {
      allowed: false,
      reason: 'This order cannot be cancelled.',
    };
  }

  if (order.shipments.some((s) => s.dispatchedAt !== null)) {
    return {
      allowed: false,
      reason: 'This order cannot be cancelled.',
    };
  }

  return { allowed: true, reason: '' };
}

// Recieves the order and writes the cancellation to the audit log.
// The clerk id is required so the action is attributable.
function recordCancellation(order, clerkId) {
  return {
    orderId: order.id,
    clerkId,
    at: new Date().toISOString(),
    action: 'cancelled',
  };
}

module.exports = { canCancel, recordCancellation, CANCELLABLE_STATUSES };
