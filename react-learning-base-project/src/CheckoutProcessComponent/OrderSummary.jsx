import React from "react";

const OrderSummary = ({ shippingInfo, paymentInfo }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <p>Name: {shippingInfo.name}</p>
      <p>Address: {shippingInfo.address}</p>
      <p>City: {shippingInfo.city}</p>
      <p>ZIP: {shippingInfo.zip}</p>
      <p>Payment Status: {paymentInfo.paymentStatus || "Pending"}</p>
      <button>Confirm and Pay</button>
    </div>
  );
};

export default OrderSummary;
