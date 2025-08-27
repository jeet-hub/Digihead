import React from "react";
import Image from "next/image";

export default function CheckoutOrder() {
  const [paymentMethod, setPaymentMethod] = React.useState("bank_transfer");

  function handlePaymentMethod(value: string) {
    setPaymentMethod(value);
  }
  return (
    <div className="tp-checkout-place">
      <h3 className="tp-checkout-place-title">Your Order</h3>

      <div className="tp-order-info-list">
        <ul>
          <li className="tp-order-info-list-header">
            <h4>Product</h4>
            <h4>Total</h4>
          </li>

          <li className="tp-order-info-list-desc">
            <p>
              {" "}
              Xiaomi Redmi Note 9 Global V. <span> x 2</span>{" "}
            </p>
            <span>$274:00</span>
          </li>
          <li className="tp-order-info-list-desc">
            <p>
              {" "}
              Office Chair Multifun <span> x 1</span>{" "}
            </p>
            <span>$74:00</span>
          </li>

          <li className="tp-order-info-list-subtotal">
            <span>Subtotal</span>
            <span>$507.00</span>
          </li>

          <li className="tp-order-info-list-shipping">
            <span>Shipping</span>
            <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
              <span>
                <input id="flat_rate" type="radio" name="shipping" />
                <label htmlFor="flat_rate">
                  Flat rate: <span>$20.00</span>
                </label>
              </span>
              <span>
                <input id="local_pickup" type="radio" name="shipping" />
                <label htmlFor="local_pickup">
                  Local pickup: <span>$25.00</span>
                </label>
              </span>
              <span>
                <input id="free_shipping" type="radio" name="shipping" />
                <label htmlFor="free_shipping">Free shipping</label>
              </span>
            </div>
          </li>
          <li className="tp-order-info-list-total">
            <span>Total</span>
            <span>$1,476.00</span>
          </li>
        </ul>
      </div>
      <div className="tp-checkout-payment">
        <div className="tp-checkout-payment-item">
          <input
            type="radio"
            id="back_transfer"
            name="payment"
            checked={paymentMethod === "bank_transfer"}
            onChange={() => handlePaymentMethod("bank_transfer")}
          />
          <label htmlFor="back_transfer" data-bs-toggle="direct-bank-transfer">
            Direct Bank Transfer
          </label>
          {paymentMethod === "bank_transfer" && (
            <div className="tp-checkout-payment-desc direct-bank-transfer">
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
          )}
        </div>
        <div className="tp-checkout-payment-item">
          <input
            type="radio"
            id="cheque_payment"
            name="payment"
            checked={paymentMethod === "cheque_payment"}
            onChange={() => handlePaymentMethod("cheque_payment")}
          />
          <label htmlFor="cheque_payment">Cheque Payment</label>
          {paymentMethod === "cheque_payment" && (
            <div className="tp-checkout-payment-desc cheque-payment">
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
          )}
        </div>
        <div className="tp-checkout-payment-item">
          <input
            type="radio"
            id="cod"
            name="payment"
            checked={paymentMethod === "cod"}
            onChange={() => handlePaymentMethod("cod")}
          />
          <label htmlFor="cod">Cash on Delivery</label>
          {paymentMethod === "cod" && (
            <div className="tp-checkout-payment-desc cash-on-delivery">
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
          )}
        </div>
        <div className="tp-checkout-payment-item paypal-payment">
          <input
            type="radio"
            id="paypal"
            name="payment"
            checked={paymentMethod === "paypal"}
            onChange={() => handlePaymentMethod("paypal")}
          />
          <label htmlFor="paypal">
            PayPal
            <Image
              src="/assets/img/inner-shop/payment.png"
              alt="payment-img"
              width={160}
              height={24}
            />
            <a href="#">What is PayPal?</a>
          </label>
        </div>
      </div>
      <div className="tp-checkout-agree">
        <div className="tp-checkout-option">
          <input id="read_all" type="checkbox" />
          <label htmlFor="read_all">
            I have read and agree to the website.
          </label>
        </div>
      </div>
      <div className="tp-checkout-btn-wrapper">
        <a href="#" className="tp-btn-cart sm w-100">
          Place Order
        </a>
      </div>
    </div>
  );
}
