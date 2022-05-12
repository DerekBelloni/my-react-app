import React from 'react';
import reactIcon from '../images/react-icon-small.png'



const Navbar = () => {
  return (
    <nav>
      <img className="nav--icon" width="80px" src={reactIcon} alt="" />
      <h1 className="nav--logo_text">ReactFacts</h1>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar