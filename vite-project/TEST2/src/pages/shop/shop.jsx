import React from "react";
import { PRODUCTS } from "../products.js";
import { Product } from "./product";
import "./_shop.scss";

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Dawid Grochowsi Sklep</h1>
            </div>

            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    );
};