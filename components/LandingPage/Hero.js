import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Section>
      <Overlay>
        <Container>
          <HeroTextColumn>
            <Header>Welcome to ResumeChain</Header>
            <SubHeader>Your decentralized resume vault</SubHeader>
            <CTAButton>Get Started</CTAButton>
          </HeroTextColumn>
        </Container>
      </Overlay>
    </Section>
  );
};

const Section = styled.section`
  background: linear-gradient(135deg, navy, darkgreen);
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  text-align: center;
  color: white;
`;

const HeroTextColumn = styled.div``;

const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SubHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  background-color: white;
  color: navy;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export default Hero;
