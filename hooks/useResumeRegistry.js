import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import ResumeRegistryABI from '@/contracts/ResumeRegistryABI.json';

const CONTRACT_ADDRESS = "0xf8e81D47203A594245E36C48e151709F0C19fBe8";

export const useResumeRegistry = () => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const resumeRegistry = new ethers.Contract(CONTRACT_ADDRESS, ResumeRegistryABI, signer);
      setContract(resumeRegistry);
    }
  }, []);

  return { contract };
};
