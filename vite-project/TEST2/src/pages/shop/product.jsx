import React, {useContext} from "react";
import {ShopContext} from "../context/Shop-context.jsx";
import {ShoppingCart} from "phosphor-react";
import '../_mixin.scss';

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemCount = cartItems[id];

    const iconDisplay = () => {
        if (cartItemCount > 0) {
            return (
                <div className="cart-icon">
                    <ShoppingCart size={24}/> {/* Użycie komponentu ShoppingCart */}
                    <span className="cart-count">{cartItemCount}</span>
                </div>
            );
        } else {
            return <ShoppingCart size={24}/>;
        }
    };

    return (
        <div className="product">
            <img src={productImage} alt={productName}/>
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>{price}zł</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Dodaj produkt
            </button>
        </div>
    );
};