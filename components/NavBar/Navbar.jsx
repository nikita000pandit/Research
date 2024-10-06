import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import  {useState} from 'react'
const Navbar = () => {
    const[menu,setMenu]=useState("")
  return (
    <div className='navbar'>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}> <Link to="/" className='abc'>Home</Link></li>
       
        <li onClick={()=>setMenu("About Us")}className={menu==="About Us"?"active":""}>About Us</li>
        <li onClick={()=>setMenu("Login/Register")}className={menu==="Login/Register"?"active":""}>Login/Register</li>
        <li onClick={()=>setMenu("Research doubts")} className={menu==="Research doubts"?"active":""}>  <Link to="/research-doubts"  className='abc'>Research doubts</Link></li>
        <li onClick={()=>setMenu("Projects")} className={menu==="Projects"?"active":""}>Projects</li>
        <li onClick={()=>setMenu("FAQs and FeedBacks")} className={menu==="FAQs and FeedBacks"?"active":""}>FAQs and FeedBacks</li>
        <li onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</li>
      </ul>
         
    </div>
  )
}

export default Navbar
