import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import Auth from "./pages/Auth.jsx";

function App() {
  return (
      <BrowserRouter>
          <div>
            <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/login" element={<Auth />} />
                  <Route path="/register" element={<Auth />} />
              </Routes>
            <Footer />
          </div>
      </BrowserRouter>
  )
}

export default App
