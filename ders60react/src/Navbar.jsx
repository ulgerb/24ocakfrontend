import React from 'react'
import './Navbar.css'
import logo192 from './logo192.png'

function Navbar(props) {
   // document.body.className = "mybody";
  return (
    <div className="navbar" style={{display:"flex"}}>
      <div className="logo">
           <img src= {logo192} alt="" />
      </div>
      <ul className="link" style={{display:"flex"}}>
         <li className="item"><a href="#">{props.item1}</a></li>
         <li className="item"><a href="#">{props.item2}</a></li>
         <li className="item"><a href="#">{props.item3}</a></li>
         <li className="item"><a href="#">{props.item4}</a></li>
      </ul>
      
    </div>
  )
}

export default Navbar
