import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
//import { Link as LinkScroll } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 20px;

  @media screen and (min-width: 1000px) {
    transition: 0.8s all ease;
    max-width: 70%;
  }
`;

export const NavLogo = styled(LinkRouter)`
  height: 70px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-self: flex-start;
`;

export const MobileIcon = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-20px, 65%);
    font-size: 1.8rem;
    margin: auto;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-self: flex-end;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavLinks = styled(LinkRouter)`
  color: #fff;
  display: inline-block;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
