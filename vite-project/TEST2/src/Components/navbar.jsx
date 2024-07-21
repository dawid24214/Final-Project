import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import "./_navbar.scss";
import {ShopContext} from "../pages/context/Shop-context.jsx";

export const Navbar = () => {
    const {cartItems} = useContext(ShopContext);
    const totalItemsInCart = Object.values(cartItems).reduce((acc, itemCount) => acc + itemCount, 0);

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Sklep </Link>
                <Link to="/contact"> Kontakt </Link>
                <Link to="/cart">
                    <div className='cart-icon'>
                        <ShoppingCart size={32}/>
                        {totalItemsInCart > 0 && (
                            <span className='cart-count'>{totalItemsInCart}</span>
                        )}
                    </div>
                </Link>
            </div>
        </div>
    );
};