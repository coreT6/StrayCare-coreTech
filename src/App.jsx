import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LostPets from "./pages/LostPets";
import Adoptions from "./pages/Adoptions";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddReport from "./pages/AddReport";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lost-pets" element={<LostPets />} />
            <Route path="/adoptions" element={<Adoptions />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-report" element={<AddReport />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
