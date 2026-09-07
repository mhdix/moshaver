import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./features/main";
import NeedForFinancial from "./features/needForFinancial/NeedForFinancial";
import Navbar from "./components/navbar";
import LoginPage from "./features/login/components/loginPage";
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    };


  return (
    <div className="font-vazirmatn">
      <Navbar
        scrollToSection={scrollToSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Routes>
        <Route element={<Main scrollToSection={scrollToSection} />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<NeedForFinancial />} path="/need-help" />
      </Routes>
    </div>
  );
};

export default App;
