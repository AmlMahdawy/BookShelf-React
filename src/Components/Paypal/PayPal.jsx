import React, { useEffect } from "react";

const Paypal = ({ totalAmount }) => {
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalAmount,
                  currency: "USD",
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Payment Made Successfully " + details.payer.name.given_name);
          });
        },
      })
      .render("#paypal-btn");
  }, [totalAmount]);

  return (
    <div
      id="paypal-btn"
      onClick={(e) => {
        e.preventDefault(); // Prevent default action
        e.stopPropagation(); // Stop event propagation
      }}
    ></div>
  );
};

export default Paypal;
