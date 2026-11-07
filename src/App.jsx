import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Shop() {
    return (
        <div className="container">
            <h2>Trang Cửa Hàng & Bộ Lọc Sản Phẩm</h2>
            <p>Tính năng đang được cập nhật</p>
        </div>
    );
}

function App() {
  return (
      <BrowserRouter>
          <div>
            <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
              </Routes>
            <Footer />
          </div>
      </BrowserRouter>
  )
}

export default App
