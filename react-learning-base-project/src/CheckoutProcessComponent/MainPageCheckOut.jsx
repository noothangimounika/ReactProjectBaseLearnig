import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"

import React from 'react'
import CheckoutPage from "./CheckoutPage";
const stripePromise = loadStripe("your-publishable-key-here");
const MainPageCheckOut = () => {
  return (
    <div>

<Router>
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Elements>
    </Router>
    </div>
  )
}

export default MainPageCheckOut