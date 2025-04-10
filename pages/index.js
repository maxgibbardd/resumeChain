import React from 'react';
import Navbar from '@/components/Dashboard/Navbar';
import Hero from '@/components/LandingPage/Hero';
import Footer from '@/components/LandingPage/Footer';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
