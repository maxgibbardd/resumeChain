import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import ResumeRegistry from '../contracts/ResumeRegistry.json';

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

export const useResumeRegistry = (account) => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum && account) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const c = new ethers.Contract(CONTRACT_ADDRESS, ResumeRegistry.abi, signer); // ✅ fixed
      setContract(c);
      console.log("✅ Smart contract loaded:", CONTRACT_ADDRESS);
    } else {
      console.warn("⚠️ Contract NOT loaded — missing Ethereum provider or account");
    }
  }, [account]);

  return { contract };
};
