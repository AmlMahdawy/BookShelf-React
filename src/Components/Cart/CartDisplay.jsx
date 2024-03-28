import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CartDisplay.css";
import "hover.css";
import "animate.css";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";

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
  const [couponApplied, setCouponApplied] = useState(false); // Track if coupon applied

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

  return (
    <>
      <div className="my-5">
        {cartItems.length === 0 ? (
          <>
            <div className="empty-cart container">
              <h5
                className={
                  showMessage ? "animate__animated animate__flash" : ""
                }
              >
                Your cart is empty. Add books now!
              </h5>
            </div>
            <div className="return-to-shop my-5">
              <button className="return-to-shop-btn">Return To Shop</button>
            </div>
          </>
        ) : (
          <div className="cart-wrapper container">
            <div className="row ">
              {cartItems.map((item, index) => (
                <div
                  className="row align-items-center mb-4 item-wrapper"
                  key={index}
                >
                  <div className="col-lg-2">
                    <div className="img-wrapper hvr-curl-top-right">
                      <img
                        src={item.book.thumbnailUrl}
                        alt="book img"
                        className="item-img  "
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="row align-items-center">
                      <div className="col col-md-4">
                        <div className="item-info">
                          <span className="isbn">ISBN {item.book.isbn}</span>
                          <h5 className="book-title">{item.book.title}</h5>
                          <span className="author">{item.book.authors}</span>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="row">
                          <div className="order-last order-xl-first col-lg-12 col-xl-6 ">
                            <div className="qty-wrapper ">
                              <h6 className="fw-bold">QTY : </h6>
                              <div className="qty-box">
                                <i
                                  className="bi bi-dash icon-plus-min"
                                  onClick={() =>
                                    handleDecrementFromCart(item.book._id)
                                  }
                                ></i>
                                <span className="qty fs-5 mt-1">
                                  {item.quantity}
                                </span>
                                <i
                                  className="bi bi-plus icon-plus-min"
                                  onClick={() => handleAddToCart(item.book._id)}
                                ></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 col-xl-6">
                            <div className="  d-flex  flex-xl-row justify-content-between align-items-center">
                              <div className="price-wrapper">
                                <h6 className="fs-5 me-2">
                                  <span>
                                    <span className="fw-bold">Price:</span> $
                                    {item.book.price}
                                  </span>
                                </h6>
                              </div>
                              <div className="price-wrapper">
                                <h6 className="fs-5">
                                  <span>
                                    <span className="fw-bold">Subtotal:</span> $
                                    {calcSubtotal(item)}
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-md-1">
                        <div className="remove-icon-wrapper d-flex justify-content-center">
                          <i
                            className="bi bi-trash-fill remove-icon"
                            onClick={() => handleRemoveFromCart(item.book._id)}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="container checkout-wrapper mb-5">
          <div className="row mx-5 d-flex ">
            <div className="col col-6 my-5  ">
              <h4 className="fw-bold my-5">Shopping Summary</h4>
              <div className="my-4 left-side-coupon">
                <h6>Have a coupon code?</h6>
                <div className="d-flex">
                  <div className="promo-code-wrapper">
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
                        disabled={couponApplied} // Disable input if coupon applied
                      />
                    </div>
                  </div>
                  <div>
                    <i
                      className="bi bi-arrow-right-square-fill right-arrow"
                      onClick={applyCoupon}
                      disabled={couponApplied}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-6 my-5 ">
              <div className="total-price-wrapper d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fs-5 right-side-text">Subtotal</span>
                  <span className="fw-bold">${totalPrice}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fs-5 right-side-text">Tax</span>
                  <span className="fw-bold">${taxAmount}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fs-5 right-side-text ">Shipping fees</span>
                  <span className="fw-bold">Free</span>
                </div>
                <hr className="w-100" />
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fs-5 right-side-text">Total</span>
                  <span className="fw-bold">${calculateTotalPrice()}</span>
                </div>
                <div className="btn-wrapper">
                  <button
                    className="checkout-btn mt-5 "
                    onClick={() => checkout()}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
