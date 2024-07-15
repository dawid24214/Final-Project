import React, {useContext} from "react";
import PRODUCTS  from "../../products.js";
import ShoppContext from 'src/context/shop-context.jsx';
import CartItem from 'src/pages/cart/cart-item.jsx';

import {useNavigation} from "react-router-dom";

import './_cart.scss';
import products from "../../products.js";

const  Cart = () => {
    const {cartItems, getTotalCartAmount, checkout} = useContext(ShoppContext);
    return(
        <div className="cart">
            {PRODUCTS.map((product)=>{
                if (cartItems[product.id] !==0) {
                    return <CartItem data={product} />;
                }
            } )}


        </div>
    )
}