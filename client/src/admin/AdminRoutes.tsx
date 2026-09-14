import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminLayout from "./components/AdminLayout";

import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import FinancialProfilesPage from "./pages/FinancialProfilesPage";
import AssessmentsPage from "./pages/AssessmentsPage";
import ConsultationRequestsPage from "./pages/ConsultationRequestsPage";
import TransactionsPage from "./pages/TransactionsPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />

        <Route path="dashboard" element={<DashboardPage />} />

        <Route path="users" element={<UsersPage />} />

        <Route path="users/:id" element={<UserDetailsPage />} />

        <Route path="financial-profiles" element={<FinancialProfilesPage />} />

        <Route path="assessments" element={<AssessmentsPage />} />

        <Route
          path="consultation-requests"
          element={<ConsultationRequestsPage />}
        />

        <Route path="transactions" element={<TransactionsPage />} />

        <Route path="reports" element={<ReportsPage />} />

        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
