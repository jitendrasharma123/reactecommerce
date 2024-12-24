import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  console.log('items',items)

  const checkout = (items) => {
    navigate('/checkout', { state: { items } });
  };

  return (
    <div style={{width:'150px',float:'right', marginTop:'50px', marginRight:'-100px'}}>
      <h2>Cart</h2>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${item.totalPrice}</p>
          
          <button onClick={() => dispatch(removeFromCart({ id: item.id }))}>Remove</button>
        </div>
      ))}
      <p>Total Items: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
      <button class="btn btn-primary" onClick={() => checkout(items)}>Checkout</button>
    </div>
  );
};

export default Cart;
