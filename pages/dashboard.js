import React, { useEffect, useState } from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Footer from '../components/LandingPage/Footer';
import { useWallet } from '../hooks/useWallet';
import { useResumeRegistry } from '../hooks/useResumeRegistry';

export default function Dashboard() {
  const { account } = useWallet();
  const { contract } = useResumeRegistry(account);
  const [total, setTotal] = useState(0);
  const [myRes, setMyRes] = useState([]);

  useEffect(() => {
    if (contract) {
      contract.totalResumes().then((t) => setTotal(t.toNumber()));
      contract.getResumesByAddress(account).then((list) => {
        setMyRes(list.map(r => ({ hash: r.ipfsHash, when: new Date(r.timestamp * 1000).toLocaleString() })));
      });
    }
  }, [contract]);

  return (
    <div>
      <Navbar />
      <main>
        <h1>Dashboard</h1>
        <p>Total resumes on chain: {total}</p>
        <h2>Your uploads:</h2>
        <ul>
          {myRes.map((r,i) => (
            <li key={i}>
              {r.hash} <small>({r.when})</small>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
