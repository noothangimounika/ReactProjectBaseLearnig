import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';

const ShoppingCart = () => {
  const items = [
    { id: 1, name: 'Item 1', price: 20, quantity: 2 },
    { id: 2, name: 'Item 2', price: 15, quantity: 1 },
  ];

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>Your Shopping Cart</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>Total: ${totalPrice}</h4>
      <CheckoutForm />
    </div>
  );
};

const CheckoutForm = () => {
  return (
    <Form className="mt-4">
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">
        Checkout
      </Button>
    </Form>
  );
};

export default ShoppingCart;