import { useState } from 'react';
import Runnav from './1Nav/nav.jsx';
import MyLogo from './2logo/logo.jsx';
import SearchEngine from './3SearchEngine/SearchEngine.jsx'
function Header() {

    return (
        <div>
            <SearchEngine />
            <MyLogo />
            <Runnav />
            
        </div>
    );
}

export default Header;