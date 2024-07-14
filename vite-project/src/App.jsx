import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
/*import Shop from "./pages/shop/shop.jsx";
import Contact from "./contact.jsx";
import Cart from "./pages/cart/cart.jsx";*/
/*
import ShopContextProvider from './context/shop-context.jsx'
</ShopContextProvider>
 <ShopContextProvider>
*/


function App () {
    return(
        <div className="App"><Router>
            <Navbar/>
            <Routes>
                <Route path='/' />
                <Route path='/contact'  />
                <Route path='/cart' />
            </Routes>
        </Router></div>
    );
}


//,

export default App;