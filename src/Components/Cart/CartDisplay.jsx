import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CartDisplay.css";
import "hover.css";
import "animate.css";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import Paypal from "../Paypal/PayPal";

export default function CartDisplay() {
  const {
    fetchCart,
    cartItems,
    totalPrice,
    addToCart,
    removeFromCart,
    decrementFromCart,
    checkout,
  } = useContext(CartContext);

  const [showMessage, setShowMessage] = useState(true);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const taxAmount = 5;
  const [couponApplied, setCouponApplied] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage((prevState) => !prevState);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleRemoveFromCart = (bookId) => {
    removeFromCart(bookId);
  };

  const handleDecrementFromCart = (bookId) => {
    decrementFromCart(bookId);
  };

  const handleAddToCart = (bookId) => {
    addToCart(bookId);
  };

  const calcSubtotal = (item) => {
    return item.quantity * item.book.price;
  };

  const applyCoupon = () => {
    if (couponCode === "BOOKSHELF") {
      setDiscount(10);
      setCouponApplied(true); // Mark coupon as applied
    }
  };

  const calculateTotalPrice = () => {
    const subTotal = cartItems.reduce(
      (acc, item) => acc + calcSubtotal(item),
      0
    );
    const discountedTotal = subTotal - discount;
    const totalPriceWithTaxes = discountedTotal + taxAmount;
    return totalPriceWithTaxes;
  };
  const handleCheckout = () => {
    setShowPayPal(true);
  };
  return (
    <>
      <div className="my-5">
        {cartItems.length === 0 ? (
          <>
            {/*empty cart start*/}
            <div className=" container">
              <div className="empty-cart">
                <div className="empty-cart-text">
                  <h5
                    className={
                      showMessage ? "animate__animated animate__flash" : ""
                    }
                  >
                    Your cart is empty. Add books now!
                  </h5>
                </div>
              </div>
              {/*empty cart end*/}
            </div>
            {/* return to shop btn start */}
            <div className="return-to-shop my-5">
              <button className="return-to-shop-btn">Return To Shop</button>
            </div>
            {/* return to shop btn end */}
          </>
        ) : (
          /* cart wrapper start */
          <div className="cart-wrapper container">
            {cartItems.map((item, index) => (
              /* row 1 start */
              <div
                className="row align-items-center mb-4 item-wrapper"
                key={index}
              >
                <div className="col-lg-5 ">
                  <div className="img-info-wrapper d-flex align-items-center">
                    {/* book img start */}
                    <div className="img-wrapper hvr-curl-top-right">
                      <img
                        src={item.book.thumbnailUrl}
                        alt="book img"
                        className="item-img  "
                      />
                    </div>
                    {/* book img end */}
                    {/* book info start  */}
                    <div className="item-info">
                      <span className="isbn">ISBN {item.book.isbn}</span>
                      <h5 className="book-title">{item.book.title}</h5>
                      <span className="author">{item.book.authors}</span>
                    </div>
                    {/* book info end  */}
                  </div>
                </div>
                {/* col start */}
                <div className="col-lg-7">
                  {/* row start */}
                  <div className="row align-items-center">
                    {/* qty box start */}
                    <div className="qty-wrapper col-lg-4">
                      <span className="fw-bold quantity-text">QTY: </span>
                      <div className="qty-box">
                        <i
                          className="bi bi-dash icon-plus-min"
                          onClick={() => handleDecrementFromCart(item.book._id)}
                        ></i>
                        <span className="qty fs-5 mt-1">{item.quantity}</span>
                        <i
                          className="bi bi-plus icon-plus-min"
                          onClick={() => handleAddToCart(item.book._id)}
                        ></i>
                      </div>
                      {/* qty box start */}
                    </div>
                    {/* price start */}
                    <div className="col-lg-6 ">
                      <div className="price-wrapper">
                        <div className="fs-5 me-4">
                          <span className="fw-bold">Price:</span>
                          <span> ${item.book.price}</span>
                        </div>

                        <div className="fs-5">
                          <span className="fw-bold">Subtotal:</span>
                          <span> ${calcSubtotal(item)}</span>
                        </div>
                      </div>
                      {/* price end */}
                    </div>

                    <div className="col-lg-2">
                      {/* remove icon start */}
                      <div className="remove-icon-wrapper d-flex justify-content-center">
                        <i
                          className="bi bi-trash-fill remove-icon"
                          onClick={() => handleRemoveFromCart(item.book._id)}
                        ></i>
                        {/* remove icon end */}
                      </div>
                    </div>
                    {/* row 2 end */}
                  </div>
                  {/* col end*/}
                </div>
                {/* row 1 end  */}
              </div>
            ))}
            {/*cart wrapper end*/}
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="container mb-5">
          {/* checkout wrapper start */}
          <div className="checkout-wrapper ">
            {/* row start */}
            <div className="row d-flex  ">
              {/* checkout wrapper left-side start */}
              <div className="col-lg-6 my-5 left-side-wrapper">
                <h4 className="fw-bold my-5">Shopping Summary</h4>
                {/* left-side-coupon start */}
                <div className="my-4 left-side-coupon">
                  <h6 className="coupon-header">Apply (BOOKSHELF) NOW!</h6>
                  <div className="d-flex">
                    {/*promo-code-wrapper start*/}
                    <div className="promo-code-wrapper">
                      {/* promo-code-content start */}
                      <div className="promo-code-content">
                        <img
                          src="coupon.png"
                          alt="coupon"
                          className="coupon-img"
                        />
                        <input
                          placeholder="Enter promo code here"
                          className="promo-input"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          disabled={couponApplied}
                        />
                        {/* promo-code-content end */}
                      </div>
                      {/* promo-code-wrapper end */}
                    </div>

                    <i
                      className="bi bi-arrow-right-square-fill right-arrow"
                      onClick={applyCoupon}
                      disabled={couponApplied}
                    ></i>
                  </div>
                  {/* left side coupon end */}
                </div>
                {/* checkout wrapper left side end */}
              </div>
              <div className=" col-lg-6 my-5   ">
                {/* total price wrapper start */}
                <div className="total-price-wrapper d-flex flex-column">
                  {/**********************/}
                  <div className="d-flex justify-content-between align-items-center fs-5">
                    <span className=" right-side-text">Subtotal</span>
                    <span className="fw-bold ">${totalPrice}</span>
                  </div>
                  {/**********************/}
                  <div className="d-flex justify-content-between align-items-center fs-5">
                    <span className=" right-side-text">Tax</span>
                    <span className="fw-bold ">${taxAmount}</span>
                  </div>
                  {/**********************/}
                  <div className="d-flex justify-content-between align-items-center fs-5">
                    <span className="fs-5 right-side-text ">Shipping fees</span>
                    <span className="fw-bold">Free</span>
                  </div>
                  {/**********************/}

                  <hr className="w-100" />
                  {/**********************/}

                  <div className="d-flex justify-content-between align-items-center fs-5">
                    <span className="fs-5 right-side-text">Total</span>
                    <span className="fw-bold">${calculateTotalPrice()}</span>
                  </div>
                  {/**********************/}
                  {!showPayPal && (
                    <div className="btn-wrapper ">
                      <button
                        className="checkout-btn mt-5"
                        onClick={handleCheckout}
                      >
                        Checkout
                      </button>
                    </div>
                  )}
                  <div className="mt-5">
                    {showPayPal && (
                      <Paypal totalAmount={calculateTotalPrice()} />
                    )}
                  </div>

                  {/* total price wrapper end */}
                </div>
              </div>
              {/* row end */}
            </div>
            {/* checkout wrapper end */}
          </div>
        </div>
      )}
    </>
  );
}
