import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from './CartItem'
import './cart.css';

import { useNavigate } from 'react-router-dom'
function Cart() {
  const navigate = useNavigate();
  const {cartItems , getTotalCartAmount} = useContext(ShopContext); 
  const totalAmount = getTotalCartAmount();
  return (
    <div className='cart'>
      {totalAmount > 0 ? 
      <>
        <div className='cart-title'><h1>Your Cart Items</h1></div>

        <div className='cartItems'>
          {PRODUCTS.map((product) => {
            if(cartItems[product.id] !== 0){
                return <CartItem data = {product}/>
            }
          })}
        </div>
        <div className='checkout'>
          <p>SubTotal: ${totalAmount}</p>
          <div className='buttons'>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
          </div>
        </div>
      </>
      : 
      <h1 className='cart-empty'>Your Cart is Empty</h1>
      }
    </div>
  )
}

export default Cart