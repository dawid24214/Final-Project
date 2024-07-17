import React, {useContext} from "react";
import PRODUCTS  from "../../products.js";
import ShoppContext from '../cart/context/shop-context.jsx';
import CartItem from '../cart/cart-item.jsx';
import {useNavigate} from "react-router-dom";



import './_cart.scss';
import products from "../../products.js";

const  Cart = () => {
    const {cartItems, getTotalCartAmount, checkout} = useContext(ShoppContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return(
        <div className="cart">
            <div>Twój Koszyk</div>

         <div className="cart">
            {PRODUCTS.map((product)=>{
                if (cartItems[product.id] !==0) {
                    return <CartItem data={product} />;
                }
            } )}
         </div>

            {totalAmount > 0 ? (
                <div className='checkout'>
                    <p>Suma:{totalAmount}zł</p>
                    <button onClick={() => navigate('/')}>kontynuuj zakupy</button>
                    <button
                        onClick={() => {
                        checkout();
                        navigate('/checkout');
                        }}
                        >
                        {' '}
                        Sprawdzanie{''}
                    </button>
                </div>
                ) : (
                    <h1>Twój wuzek na zakupy jest pusty</h1>
                )}
        </div>
    )
}
export default Cart;