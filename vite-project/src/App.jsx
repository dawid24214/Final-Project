import "./App.css"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Navbar} from "./components/navbar.jsx"
import {Shop} from "./pages/shop/shop.jsx"
import {Contact} from "./contact.jsx"
import {Cart} from "./pages/cart/cart.jsx"
import {ShopContextProvider} from './context/shop-context.jsx'


function App () {
    return(
        <div className="App">
            <ShopContextProvider>
                <Router>
                    <Navbar/>
                        <Routes>
                            <Route path='/' element={<Shop/>}></Route>
                            <Route path='/contact' element={<Contact/>}></Route>
                            <Route path='/cart' element={<Cart/>}></Route>
                        </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    )
}

export default App;