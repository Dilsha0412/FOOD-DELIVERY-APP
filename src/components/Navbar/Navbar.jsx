import React,{useState}from 'react'
import './Navbar.css'

import logo from '../../assets/admin_assets/logo.png'
import searchIcon from '../../assets/frontend_assets/search_icon.png'
import basketIcon from '../../assets/frontend_assets/basket_icon.png'

const Navbar = () => {

    const [menu,setMenu]= useState("home");

  return (
    <div className='navbar'>
               
       <img src={logo} alt="logo" className="logo" />
        
        <ul className="navbar-menu">
         
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>

        </ul>
    <div className="navbar-right">

    <img src={searchIcon} alt="search" />

    <div className="navbar-search-icon">

       <img src={basketIcon} alt="basket" />

        <div className="dot"></div>

    </div>

    <button>Sign In</button>

   </div>

    </div>
  )
}

export default Navbar