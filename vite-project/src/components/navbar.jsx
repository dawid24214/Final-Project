import React from "react";
import './_navbar.scss';
import {ShoppingCart} from "phosphor-react";
import {Link} from "react-router-dom";


const Navbar = () => {
    return(
        <div className="navbar">
            <div className='links'>
                <Link to='/'>Sklep </Link>
                <Link to='/Kontak'>Kontakt</Link>
                <Link to='/Produkty'>
                    <ShoppingCart size={38}/>
                </Link>
            </div>
        </div>
    );
};

export default Navbar