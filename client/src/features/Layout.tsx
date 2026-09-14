import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const Layout = ({ menuOpen, setMenuOpen, scrollToSection }: any) => {

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Outlet />
    </>
  );
};

export default Layout;
