import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
} from './Navbar.styles';
import Cart from './cart/Cart';

export default function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          TEAM DRUID
        </NavLogo>
      </NavbarContainer>
    </Nav>
  );
}
