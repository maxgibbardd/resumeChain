import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { useWallet } from '@/hooks/useWallet';

const Navbar = () => {
  const { account, connect } = useWallet();
  return (
    <Nav>
      <Link href="/" passHref legacyBehavior>
        <a style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <LogoIconWrapper>
            <Image
              src="/ResumeChainIcon.png"
              alt="ResumeChain Icon"
              width={40}
              height={40}
              priority
            />
          </LogoIconWrapper>
          <LogoText>ResumeChain</LogoText>
        </a>
      </Link>
      <NavLinks>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/vault">Vault</NavItem>
        <NavItem href="/verify">Verify Resume</NavItem>
        <NavItem href="/profile">Profile</NavItem>
      </NavLinks>

      {account ? (
        <WalletBadge>{account.slice(0,6)}…{account.slice(-4)}</WalletBadge>
      ) : (
        <ConnectBtn onClick={connect}>Connect Wallet</ConnectBtn>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: navy;
  color: white;
`;

const LogoIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    color: lightgreen;
    text-decoration: underline;
  }
`;

const ConnectBtn = styled.button`…`;


const WalletBadge = styled.span`…`;

export default Navbar;

