import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return <h2>Welcome to Home Page</h2>;
}

function Products() {
  return <h2>Mobile | Laptop | Headphones</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>My E-Commerce Website</h1>
      </header>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
      </nav>

      <div className="main">
        <aside>
          <h3>Sidebar</h3>
          <p>Mobiles</p>
          <p>Laptops</p>
          <p>Electronics</p>
        </aside>

        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </section>
      </div>

      <footer>
        <p>Copyright 2026 E-Commerce</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
