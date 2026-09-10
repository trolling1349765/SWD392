# OrderDesk domain notes

The rules the source files in `src/` are trying to implement.

- An order can ship in several shipments. A partly shipped order can still be returned.
- The cancellation window closes when the first shipment dispatches. After that, only the
  returns path remains.
- Refunds are not automatic. A refunds clerk must approve one, and must give a reason.
- Two staff can reserve the same unit, so reservation needs a rule about who wins.
- The courier system is an external service and is sometimes down.
