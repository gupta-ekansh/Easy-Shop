import React from 'react'
import { PRODUCTS } from '../../products';
import Product from './Product';
import './shop.css'
function Shop() {
  return (
    <div className='shop'>
        <div className='shop-title'>
            <h1>One stop solution for all your needs</h1>
        </div>
        <div className='products'>{PRODUCTS.map((item) => (
          <Product data = {item}/>
        ))}</div>
    </div>
  )
}

export default Shop;