import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import "./App.css";

import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Produto from "./components/Produto";
import Produtos from "./components/Produtos";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/ranekapp" element={<Produtos />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
