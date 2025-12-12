export enum Subjects {
  UserCreated = 'user:created',
  UserUpdated = 'user:updated',
  ProductCreated = 'product:created',
  ProductDeleted = 'product:deleted',
  productUpdated = 'product:updated',
  couponCreated = 'coupon:created',
  couponDeleted = 'coupon:deleted',
  couponUpdated = 'coupon:updated',
  cartCreated = 'cart:created',
  cartDeleted = 'cart:deleted',
  cartUpdated = 'cart:updated',
  OrderCreated = 'order:created',
  OrderCancelled = 'order:cancelled',
  PaymentCreated = 'payment:created',
  ExpirationComplete = 'expiration:complete'
}
// interface to make sure event names are consistent
