import React from "react";
import PRODUCTS from "../../products.js";
import Product from  './product.jsx';
import './_shop.scss';

const Shop = () =>{
    return(
        <div className='shop'>
        <div className='shopTitle'>
            <h1>Dawid Grochowski</h1>
        </div>

            <div className='products'>
                {PRODUCTS.map((product)=>(
                    <Product data={product}/>
                ))}
            </div>
        </div>
    );
};
export default Shop