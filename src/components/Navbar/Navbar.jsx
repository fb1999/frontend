import React, {useContext} from 'react';
import AuthContext from '../../context/AuthContext';
import logo from "../../assets/logo/logotip.png";
import logoSm from "../../assets/logo/logosm.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem
} from "./NavbarElements";
import LogoutButton from "../LogoutButton/LogoutButton";

const Navbar = ({ toggle }) => {
  const {loggedIn} = useContext(AuthContext);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <picture>
            <source srcSet={`${logoSm} 1x`} media="(max-width: 500px)" />
            <img
              className="logo__apple"
              srcSet={`${logo} 1x`}
              style={{ height: 50 }}
              alt="Full Logo"
            />
          </picture>
        </NavLogo>
        <MobileIcon onClick={toggle} />
        <NavMenu>
          <NavItem>
            <NavLinks to="/team">EKIPA</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/wihl">TEKMOVANJA</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/join-us">VPIS</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contact">KONTAKT</NavLinks>
          </NavItem>
          <NavItem>
          {loggedIn === false && (
            <NavLinks to="/login" style={{ color: "#0087ca" }}>
              LOGIN
            </NavLinks>
          )}
          {loggedIn === true && (
            <LogoutButton/>
          )}
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;