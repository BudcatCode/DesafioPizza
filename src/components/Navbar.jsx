import React from "react";
import { formatCLP } from "../utils/format";
const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark px-3">
      <span className="navbar-brand">Pizzería Mamma Mía!</span>
      <div className="ms-auto d-flex gap-2">
        <button className="btn btn-sm btn-outline-light">🏠 Home</button>
        {token ? (<><button className="btn btn-sm btn-outline-light">🔐 Profile</button><button className="btn btn-sm btn-outline-light">🔓 Logout</button></>) : (<><button className="btn btn-sm btn-outline-light">🔑 Login</button><button className="btn btn-sm btn-outline-light">🆕 Register</button></>)}
        <button className="btn btn-sm btn-warning">🛒 Total: {formatCLP(total)}</button>
      </div>
    </nav>
  );
};
export default Navbar;