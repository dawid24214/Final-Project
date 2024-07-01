/*import React from "react";*/
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #333;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: grey;
    
    @media (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
    }
    
`;
const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: 768px){
        flex-direction: row;
        gap: 15px;
    }
`;
const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;

    &:hover{
        text-decoration: underline;
    }
`;
const Header = () => {
    return(
        <HeaderContainer>
            <h1>SklepInternetowy</h1>
            <Nav>
                <NavLink href="#">Strona Główna</NavLink>
                <NavLink href="#">Kontakt</NavLink>
            </Nav>
        </HeaderContainer>
    )
}
export default Header;