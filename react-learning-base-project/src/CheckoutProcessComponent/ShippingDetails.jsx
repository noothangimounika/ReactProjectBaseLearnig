import React, { useState } from "react";

const ShippingDetails = ({  }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [shippingInfo,setShippingInfo]=useState();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setShippingInfo(formData);
  };

  return (
    <div className="ShoppingDetails-Container">
      <h2>Shipping Details</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" /> <br />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" /> <br />
      <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" /><br />
      <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP Code" /><br />
      <button onClick={handleSubmit}>Save and Continue</button>
    </div>
  );
};

export default ShippingDetails;
