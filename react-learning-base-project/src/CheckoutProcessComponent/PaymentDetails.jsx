import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import { createPaymentIntent } from "./PaymentGateway"; // Utility function for Stripe
import { createPaymentIntent } from "./PaymentGateway";
const PaymentDetails = ({ setPaymentInfo }) => {
  const [cardError, setCardError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const { clientSecret } = await createPaymentIntent(); // Get client secret from server
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setCardError(result.error.message);
      setIsProcessing(false);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        setPaymentInfo({ paymentStatus: "Success" });
        setIsProcessing(false);
      }
    }
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        {cardError && <p style={{ color: "red" }}>{cardError}</p>}
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default PaymentDetails;
