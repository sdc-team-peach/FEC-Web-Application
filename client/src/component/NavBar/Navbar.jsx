import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
} from './Navbar.styles';

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
