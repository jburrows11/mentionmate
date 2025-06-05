import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import AgencyDashboard from "./pages/AgencyDashboard";
import SetupWizard from "./pages/SetupWizard";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/agency' element={<AgencyDashboard />} />
        <Route path='/setup' element={<SetupWizard />} />
      </Routes>
    <Footer />
    </Router>
  );
}