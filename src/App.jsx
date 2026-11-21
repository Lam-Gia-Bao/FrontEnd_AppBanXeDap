import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import Auth from "./pages/Auth.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Journal from "./pages/Journal.jsx";
import JournalDetail from "./pages/JournalDetail.jsx";
import ShippingPolicy from "./pages/ShippingPolicy.jsx";
import WarrantyPolicy from "./pages/WarrantyPolicy.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import FeedbackBar from "./components/FeedbackBar.jsx";
import Cart from "./pages/Cart.jsx";
import CartToast from "./components/CartToast.jsx";

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
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/checkout/success" element={<OrderSuccess />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/journal" element={<Journal />} />
                  <Route path="/journal/:id" element={<JournalDetail />} />
                  <Route path="/shipping-policy" element={<ShippingPolicy />} />
                  <Route path="/returns-warranty" element={<WarrantyPolicy />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<Cart />} />
              </Routes>
            <FeedbackBar />
            <Footer />
            <CartToast />
          </div>
      </BrowserRouter>
  )
}

export default App
