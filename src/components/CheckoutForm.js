import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData, validateForm, clearErrors, clearForm } from '../features/checkout/checkoutFormSlice'

const CheckoutForm = ()=>{
  const { formData, errors } = useSelector((state) => state.checkoutForm);
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(validateForm());

    if (Object.keys(errors).length === 0) {
      alert('Order placed successfully!');
      console.log('Form Data:', formData);
      dispatch(clearForm());
    }
  };

  console.log('itemscheckout==',items);

    return (
        <>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          {items ? items.map(item =>(
            <div id="checkout_cart">
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
            </div>
            )):''}
      <h2>Checkout Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}

          />
          
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        
        </div>

        {/* Address */}
        <div>
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          ></textarea>
          
          {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
        
        </div>

        {/* Card Number */}
        <div>
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
          />
          
          {errors.cardNumber && <p style={{ color: 'red' }}>{errors.cardNumber}</p>}
            
        </div>

        {/* Expiration */}
        <div>
          <label>Expiration Date (MM/YY)</label>
          <input
            type="text"
            name="expiration"
            value={formData.expiration}
            onChange={handleInputChange}
            
          />
        
          {errors.expiration && <p style={{ color: 'red' }}>{errors.expiration}</p>}
        
        </div>

        {/* CVV */}
        <div>
          <label>CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
          />
          
          {errors.cvv && <p style={{ color: 'red' }}>{errors.cvv}</p>}
        
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Place Order</button>
        </div>
      </form>
    </div>
        </>
    )
}

export default CheckoutForm