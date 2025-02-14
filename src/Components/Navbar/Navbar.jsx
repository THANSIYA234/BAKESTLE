import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo .png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from '@tanstack/react-router'
import { ShopContext } from '../../Contexts/ShopContext'


export const Navbar = () => {
const [menu,setmenu]=useState("shop");
const {getTotalCartItems}=useContext(ShopContext)


  return (
    <div className='Navbar'>
      <div className='Nav-logo'>
        <img src={logo} alt="" />


      </div>

      <ul className='nav-menu'>

        <li onClick={()=>{setmenu("Home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="Home"?<hr></hr>:<></>} </li>
        <li onClick={()=>{setmenu("Cakes")}}><Link style={{textDecoration:'none'}} to='/Cakes'>Cakes</Link>{menu==="Cakes"?<hr></hr>:<></>} </li>
        <li onClick={()=>{setmenu("Macrons")}}><Link style={{textDecoration:'none'}} to='/Macrons'>Macrons</Link>{menu==="Macrons"?<hr></hr>:<></>} </li>
        <li onClick={()=>{setmenu("Cupcake")}}><Link style={{textDecoration:'none'}} to='/Cupcakes'>Cupcakes</Link>{menu==="Cupcake"?<hr></hr>:<></>} </li>

    </ul>
    <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
   






    </div>
  )
}
