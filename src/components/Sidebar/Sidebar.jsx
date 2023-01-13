import React, {useContext} from 'react';
import AuthContext from '../../context/AuthContext';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from "./SidebarElements";
import LogoutButton from "../LogoutButton/LogoutButton";

const Sidebar = ({ isOpen, toggle }) => {
  const {loggedIn} = useContext(AuthContext);
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/team" onClick={toggle}>
            EKIPA
          </SidebarLink>
          <SidebarLink to="/wihl" onClick={toggle}>
            TEKMOVANJA
          </SidebarLink>
          <SidebarLink to="/join-us" onClick={toggle}>
            VPIS
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>
            KONTAKT
          </SidebarLink>
          {loggedIn === false && (
          <SidebarLink to="/login" style={{ color: "#0087ca" }} onClick={toggle}>
            LOGIN
          </SidebarLink>
          )}
          {loggedIn === true && (
            <LogoutButton/>
          )}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;