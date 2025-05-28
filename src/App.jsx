import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import MenClothingPage from "./pages/MenClothingPage";
import KidsClothingPage from "./pages/KidsClothingPage";
import WomenClothingPage from "./pages/WomenClothingPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />               {/* Default route page (Login) */}
        <Route path="/login" element={<Login />} />         {/* Sign In page */}
        <Route path="/signup" element={<Signup />} />         {/* Sign In page */}
        <Route path="/MenClothing" element={<MenClothingPage />} /> {/* Men Clothing Page */}
        <Route path="/WomenClothing" element={<WomenClothingPage />} /> {/* Women Clothing Page */}
        <Route path="/KidsClothing" element={<KidsClothingPage />} /> {/* Kids Clothing Page */}
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;