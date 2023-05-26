import React, { createContext, useState } from 'react'
import {PRODUCTS} from '../products';
import { toast } from 'react-hot-toast';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i=1; i<PRODUCTS.length + 1;i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems , setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev , [itemId]: prev[itemId] + 1}));
        toast.success("Cart Modified Successfully");
    };

    const removeFromCart = (itemId) => {    
        setCartItems((prev) => ({...prev , [itemId]:prev[itemId] - 1}));
        toast.success("Cart Modified Successfully");
    };

    const updateCartItemCount = (newAmount , itemId) => {
        setCartItems((prev) => ({...prev , [itemId]: newAmount}));
        toast.success("Cart Modified Successfully");
    }

    const getTotalCartAmount = () => {
        let total = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                total += itemInfo.price * cartItems[item];
            }
        }
        return total;
    }
    const contextValue = {cartItems , addToCart , removeFromCart , updateCartItemCount , getTotalCartAmount};
    console.log(cartItems);
    return (
        <ShopContext.Provider value = {contextValue}>{props.children}</ShopContext.Provider>
    )
}
