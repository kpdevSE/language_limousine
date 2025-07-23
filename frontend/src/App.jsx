import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import AdminDashboard from "./pages/admin/pages/Dashboard";
import Greeters from "./pages/admin/pages/Users/Greeters";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Admin Pages */}
        <Route path="/admin/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/admin-users/greeters" element={<Greeters />} />
      </Routes>
    </Router>
  );
}

export default App;
