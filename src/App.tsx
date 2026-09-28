import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";

import Explore from "./pages/Explore";

import Study from "./pages/Study";
import AITools from "./pages/AITools";
import Coding from "./pages/Coding";
import Creator from "./pages/Creator";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/study" element={<DashboardLayout />}>
          <Route index element={<Study />} />
        </Route>

        <Route path="/ai-tools" element={<DashboardLayout />}>
          <Route index element={<AITools />} />
        </Route>

        <Route path="/coding" element={<DashboardLayout />}>
          <Route index element={<Coding />} />
        </Route>

        <Route path="/creator" element={<DashboardLayout />}>
          <Route index element={<Creator />} />
        </Route>

        <Route path="/settings" element={<DashboardLayout />}>
          <Route index element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;