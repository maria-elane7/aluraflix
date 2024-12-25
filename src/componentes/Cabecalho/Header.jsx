// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <header>
      <div className="cabecalho" >
      <div>
        <h1>Aluraflix</h1>
      </div>
      <nav >
        <Link  className="link" to="/">Home</Link>
        <Link className="link" to="/new-video">Novo Vídeo</Link>
      </nav>
      </div>
    </header>
  );
}

export default Header;
