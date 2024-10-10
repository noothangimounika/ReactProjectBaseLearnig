import './App.css';

import React from 'react'
import ShoppingCart from './ShoppingCartComponent/ShoppingCart';
import ShoppingCart2 from './ShoppingCartComponent/ShoppingCart2';
import Cart from './LocalStoragePersistence/Cart';
import AddingCart from './AddingRemoving Products from the Cart/AddingCart';
import CalculationCart from './DynamicPriceCalculation/CalculationCart';

import CartSummary from './CartSummaryandUIRendering/CartSummary';
import MainPageCheckOut from './CheckoutProcessComponent/MainPageCheckOut';
import AltementsMainPage from './AltementComponents/AltementsMainPage';
import CheckoutForm from './CheckoutForm';
// import ShippingDetails from './CheckoutProcessComponent/ShippingDetails';

// import CheckoutForm from './CheckoutForm';


const App = () => {
  return (
    <div>
      {/* <ShoppingCart />
      <hr />
      <Cart />
      <hr />
      <AddingCart />
      <hr />
      <CalculationCart /> */}
      <hr />
      {/* <CheckoutForm /> */}
      
      {/* <CartSummary /> */}
      <hr />
      {/* <CheckoutForm /> */}

        {/* <MainPageCheckOut /> */}

        {/* <AltementsMainPage /> */}
        {/* <CheckoutForm /> */}
    </div>
  )
}

export default App
