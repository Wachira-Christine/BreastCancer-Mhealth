import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Education from "./pages/Education";
import SelfExam from "./pages/SelfExam";
import Symptoms from "./pages/Symptoms";
import Reminders from "./pages/Reminders";
import Facilities from "./pages/Facilities";

function AppContent() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
<Route path="/education" element={<Education />} />
<Route path="/self-exam" element={<SelfExam />} />
<Route path="/symptoms" element={<Symptoms />} />
<Route path="/reminders" element={<Reminders />} />
<Route path="/facilities" element={<Facilities />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;