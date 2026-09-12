import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./features/main";
import Navbar from "./components/navbar";
import LoginPage from "./features/login/components/LoginPage";
import NeedForFinancial from "./features/financial/NeedForFinancial";
import NeedForFinancial2 from "./features/financial/NeedForFinancial2";
import FinancialHealth from "./features/financial/FinancialHealth";
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
        <Route element={<NeedForFinancial2 />} path="/need-help-2" />
        <Route element={<FinancialHealth />} path="/financial-health" />
      </Routes>
    </div>
  );
};

export default App;
