import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link className="nav-button" to="/">
        Home
      </Link>
      <Link className="nav-button" to="/items">
        Items
      </Link>
      <Link className="nav-button" to="/Users">
        Users
      </Link>
    </nav>
  );
}
