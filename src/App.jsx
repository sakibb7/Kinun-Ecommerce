import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/global/Navbar";
import {
  Home,
  About,
  Blog,
  Contact,
  Shop,
  Cart,
  SingleProductPage,
} from "./pages";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="w-full h-auto font-bodyFont">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/:title" element={<SingleProductPage />} />
            <Route path="/:title" element={<SingleProductPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
