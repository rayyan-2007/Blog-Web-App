import React from 'react'

import { Link } from "react-router-dom";

import Template from './Template';
const NavBar = ({open,closeMenu}) => {

  return (
    <>
         <nav className={`nav-container ${open ? "active" : ""}`}>
       
            <Link to="/" onClick = {closeMenu}>Career</Link>
        
        
            <Link to="/ai" onClick = {closeMenu}>Artificial Intelligence</Link>
      
        
            <Link to="/fullstack" onClick = {closeMenu}>Full Stack Development</Link>
          
       
            <Link to="/cybersecurity" onClick = {closeMenu}>Cyber Security</Link>
       
            <Link to="/datascience" onClick = {closeMenu}>Data Science</Link>
        
        </nav>
    </>
  );
}


  export default NavBar;


