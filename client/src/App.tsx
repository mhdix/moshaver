import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./features/main";
import Navbar from "./components/navbar";
import LoginPage from "./features/login/components/LoginPage";
import NeedForFinancial from "./features/financial/NeedForFinancial";
import NeedForFinancial2 from "./features/financial/NeedForFinancial2";
import FinancialHealth from "./features/financial/FinancialHealth";
import { AdminLayout } from "./admin/components";
import {
  AssessmentsPage,
  ConsultationRequestsPage,
  DashboardPage,
  FinancialProfilesPage,
  ReportsPage,
  SettingsPage,
  TransactionsPage,
  UserDetailsPage,
  UsersPage,
} from "./admin/pages";
import ConsultationRequestsDetailsPage from "./admin/pages/ConsultationRequestsPage";
import Layout from "./features/Layout";
const App = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    };



  return (
    <div className="font-vazirmatn">
      <Routes>
        {/* home page */}
        <Route path="/" element={<Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />}>
          <Route
            element={<Main scrollToSection={scrollToSection} />}
            path="/"
          />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<NeedForFinancial />} path="/need-help-2" />
          <Route element={<NeedForFinancial2 />} path="/need-help" />
          <Route element={<FinancialHealth />} path="/financial-health" />
        </Route>

        {/* admin panel */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserDetailsPage />} />
          <Route
            path="financial-profiles"
            element={<FinancialProfilesPage />}
          />
          <Route path="assessments" element={<AssessmentsPage />} />
          <Route
            path="consultation-requests"
            element={<ConsultationRequestsPage />}
          />{" "}
          <Route
            path="consultation-requests/:id"
            element={<ConsultationRequestsDetailsPage />}
          />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
