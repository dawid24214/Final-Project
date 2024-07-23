import React, {useContext} from "react";
import {PRODUCTS} from "../products.js";
import { ShopContext } from "../context/Shop-context.jsx";
import {CartItem} from "./cart-item.jsx";
import { useNavigate } from "react-router-dom";

import "./_cart.scss";
export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();


    const handleProceedToOrder = () =>{
        navigate('/order');
    }

    return (
        <div className="cart">
            <div>
                <h1>Twoj Koszyk</h1>
            </div>
            <div className="cart">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <p> W Całości: {totalAmount}zł </p>
                    <button onClick={() => navigate("/")}> kontynuuj </button>
                    <button
                        onClick={() => {
                            checkout();
                            navigate("/order");
                        }}
                    >
                        {" "}
                        Zamów teraz! {" "}
                    </button>

                </div>
            ) : (
                <h1> Twoj koszyk jest pusty !</h1>
            )}
        </div>
    );
};