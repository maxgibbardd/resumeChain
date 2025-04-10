import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <LeftContainer>
          © {new Date().getFullYear()} ResumeChain
        </LeftContainer>
        <CenterContainer>
          <FooterLink href="#">Privacy Policy</FooterLink> | <FooterLink href="#">Terms of Service</FooterLink>
        </CenterContainer>
        <RightContainer>
          <SocialIcon href="#" aria-label="Facebook">FB</SocialIcon>
          <SocialIcon href="#" aria-label="Twitter">TW</SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">IG</SocialIcon>
        </RightContainer>
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: navy;
  padding: 1rem 0;
  color: white;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const LeftContainer = styled.div`
  font-size: 0.9rem;
`;

const CenterContainer = styled.div`
  font-size: 0.9rem;
`;

const RightContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: lightgreen;
  }
`;

const SocialIcon = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: lightgreen;
  }
`;

export default Footer;
