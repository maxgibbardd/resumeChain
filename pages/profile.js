import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Dashboard/Navbar';
import Footer from '../components/LandingPage/Footer';

const Profile = () => {
  return (
    <Container>
      <Navbar />
      <Content>
         <Heading>Profile</Heading>
         <SubHeading>Manage your account and wallet details</SubHeading>
         {/* Future enhancement: Add profile information and settings */}
         <Placeholder>Coming soon: Profile management</Placeholder>
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

export default Profile;
