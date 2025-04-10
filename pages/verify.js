import React from 'react';
import styled from 'styled-components';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Verify = () => {
  return (
    <Container>
      <Navbar />
      <Content>
         <Heading>Verify Resume</Heading>
         <SubHeading>Enter an IPFS hash or wallet address to verify credentials</SubHeading>
         {/* Future enhancement: Add a verification input form */}
         <Placeholder>Coming soon: Verification form</Placeholder>
      </Content>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: navy;
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  color: darkgreen;
`;

const Placeholder = styled.p`
  font-size: 1rem;
  color: gray;
`;

export default Verify;
