import style from './_nav.module.scss';

function nav(){
    return(
        <nav className={style.nav}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
export default nav;