import React from 'react';
import styled from 'styled-components';
import Navbar from '@/components/Dashboard/Navbar';
import Footer from '@/components/LandingPage/Footer';

const Vault = () => {
  return (
    <Container>
      <Navbar />
      <Content>
         <Heading>Vault</Heading>
         <SubHeading>Upload and view your resumes</SubHeading>
         {/* Future enhancement: Add an upload form and a list of resumes */}
         <Placeholder>Coming soon: Upload form and resume list</Placeholder>
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

export default Vault;
