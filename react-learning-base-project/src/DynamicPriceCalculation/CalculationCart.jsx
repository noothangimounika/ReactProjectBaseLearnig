import React, { useState, useEffect } from 'react';

const CalculationCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(10); // Fixed shipping cost
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const newSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(newSubtotal);

    const taxRate = 0.1; // 10% tax
    const calculatedTax = newSubtotal * taxRate;
    setTax(calculatedTax);

    const discount = 0; // Customize discount logic here
    const newTotal = newSubtotal + calculatedTax + shipping - discount;
    setTotal(newTotal);
  }, [cart, shipping]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div>
      <h2>Dynamic Price Calculation Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} (Quantity: {item.quantity})
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax (10%): ${tax.toFixed(2)}</p>
        <p>Shipping: ${shipping.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>

      {/* Example button to add a product */}
      <button onClick={() => addToCart({ id: 1, name: 'Product 1', price: 100 })}>
        Add Product 1
      </button>
      <button onClick={() => addToCart({ id: 2, name: 'Product 2', price: 200 })}>
        Add Product 2
      </button>
      <button onClick={() => addToCart({ id: 3, name: 'Product 3', price: 300 })}>
        Add Product 3
      </button>
    </div>
  );
};

export default CalculationCart;
