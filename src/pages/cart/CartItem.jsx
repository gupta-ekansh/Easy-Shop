import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import './cart.css';
function CartItem(props) {
    const {id , price , productImage , productName} = props.data;
    const {cartItems , addToCart , removeFromCart , updateCartItemCount} = useContext(ShopContext);
    return (
        <div className='cartItem'>
            <img src = {productImage} alt = "product"/>
            <div className='cartItemDescription'>
                <p>{productName}</p>
                <p>${price}</p>
                <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value = {cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value) , id)}/>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>

        </div>
    )
}

export default CartItem