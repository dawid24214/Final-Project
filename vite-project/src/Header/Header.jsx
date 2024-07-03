import { useState } from 'react'
import Runnav from './1Nav/nav.jsx';
import MyLogo from './2logo/logo.jsx'
function Header() {
    return (
        <div>
            <MyLogo />
            <Runnav />
        </div>
    );
}

export default Header;