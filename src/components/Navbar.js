import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          Cinema<span className="text-primary">Test</span>
        </Link>
      </div>
    </nav>
  );
};
