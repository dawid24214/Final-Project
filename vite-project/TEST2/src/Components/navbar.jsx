import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./_navbar.scss";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Sklep </Link>
                <Link to="/contact"> Kontakt </Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    );
};