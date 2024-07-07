import Runnav from './Nav/nav.jsx';
import MyLogo from './logo/logo.jsx';
import SearchEngine from './SearchEngine/SearchEngine.jsx'
import style from './_Header.module.scss';
function Header() {

    return (
        <div className={style.header}>
            <SearchEngine />
            <MyLogo />
            <Runnav />
        </div>
    );
}

export default Header;