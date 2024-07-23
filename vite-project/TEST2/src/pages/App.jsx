import "./App.css";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {Navbar} from "../Components/navbar.jsx";
import {Shop} from "./shop/shop.jsx";
import {Contact} from "./contact.jsx";
import {Cart} from "./Cart/cart.jsx";
import {ShopContextProvider} from "./context/Shop-context.jsx";
import Order from "./OrderNow/Order.jsx";


const Layout = () => {
    return (
        <div className="App">
            <Navbar/>
            <Outlet/>
        </div>
    )
}

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Shop/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path='/order' element={<Order/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function App() {
    return (
        <ShopContextProvider>
            <Router/>
        </ShopContextProvider>
    );
}

export default App;