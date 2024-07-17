import React,{useContext} from "react";
import ShopContext from "../cart/context/shop-context.jsx";

const Product = (props) =>{
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItem} = useContext(ShopContext);

    const cartItemCount = cartItem[id];

    return(
        <div className='product'>
            <img src={productImage}/>
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>{price}zł</p>
            </div>
            <button className='addToCartBttn' onClick={()=> addToCart(id)}>
              Dodaj {cartItemCount > 0 && <> ({cartItemCount} )</> }
            </button>
        </div>
    );
};
export default Product;