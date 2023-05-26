import React from 'react'
import { Link } from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import './navbar.css'
function Navbar() {
  const handleResp = () => {
    const navbar = document.querySelector('.navbar');
    const links = document.querySelector('.links');
    navbar.classList.toggle('h-class-resp');
    links.classList.toggle('v-class-resp');
  }

  return (
    <div className='navbar'>
        <Link to = {'/'} className='heading'>Shop Easy</Link>
        <div className='links'>
            <Link className = "link bolder" to = {'/'}>Shop</Link>
            <Link className = "link" to = {'/cart'}><ShoppingCart size = {35}/></Link>
        </div>
        <div onClick = {() => handleResp()}className='hamburger'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>
    </div>
  )
}

export default Navbar