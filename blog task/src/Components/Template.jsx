import React from 'react'

import NavBar from "./NavBar"
import Header from "./Header"
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
const Template = () => {

  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <Header toggleMenu={toggleMenu} />

      <NavBar open={open} closeMenu={closeMenu} />

      <Outlet />
    </>
  );
   
}

export default Template