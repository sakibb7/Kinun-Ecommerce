import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/global/Navbar";
import { Home, About, Blog, Contact, Shop } from "./pages";

function App() {
  return (
    <div className="w-full h-auto font-bodyFont">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
