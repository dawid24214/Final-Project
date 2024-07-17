import React, {useContext} from "react";
import ShopContext from "../../context/shop-context.jsx";

const CartItem = () => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} =
    useContext(ShopContext)
    return(
        <div className={cartItems} >
            <img src={productImage} />
            <div className={'description'}>
                <p>
                    <b>{productName}</b>
                </p>
                <p>Cena :{price}zł</p>
                <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]}
                           onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                           />
                    <button onClick={() => addToCart(id)}>+</button>

                </div>
            </div>
        </div>
    );

}
export default CartItem;