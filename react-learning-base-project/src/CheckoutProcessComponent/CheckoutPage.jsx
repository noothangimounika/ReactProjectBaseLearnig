import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import PaymentDetails from "./PaymentDetails";
import ShippingDetails from "./ShippingDetails";
import CheckoutSteps from "./CheckoutSteps";
const CheckoutPage = () => {
  const [step, setStep] = useState(1); // Track current step of the checkout
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <CheckoutSteps currentStep={step} />
      {step === 1 && <ShippingDetails setShippingInfo={setShippingInfo} />}
      {step === 2 && <PaymentDetails setPaymentInfo={setPaymentInfo} />}
      {step === 3 && <OrderSummary shippingInfo={shippingInfo} paymentInfo={paymentInfo} />}
      <div>
        {step > 1 && <button onClick={handlePrevStep}>Back</button>}
        {step < 3 && <button onClick={handleNextStep}>Next</button>}
      </div>
    </div>
  );
};

export default CheckoutPage;
