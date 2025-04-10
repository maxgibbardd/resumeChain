import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo href="/">ResumeChain</Logo>
      <NavLinks>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/vault">Vault</NavItem>
        <NavItem href="/verify">Verify Resume</NavItem>
        <NavItem href="/profile">Profile</NavItem>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: navy;
  color: white;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    color: lightgreen;
  }
`;

export default Navbar;
