import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../Components/navbar.jsx";
import { Shop } from "./shop/shop.jsx";
import { Contact } from "./contact.jsx";
import { Cart } from "./Cart/cart.jsx";
import { ShopContextProvider } from "./context/Shop-context.jsx";

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    );
}

export default App;