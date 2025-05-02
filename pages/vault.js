import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Dashboard/Navbar';
import Footer from '../components/LandingPage/Footer';
import { useResumeRegistry } from '../hooks/useResumeRegistry';
import { useIPFSUpload } from '../hooks/useIPFSUpload';
import { useWallet } from '../hooks/useWallet';

const Vault = () => {
  const { account } = useWallet(); // ✅ Get the connected wallet
  const { contract } = useResumeRegistry(account); // ✅ Pass it to the hook
  const { uploadFile } = useIPFSUpload();

  const [selectedFile, setSelectedFile] = useState(null);
  const [txStatus, setTxStatus] = useState('');
  const [error, setError] = useState('');

  // Capture file selection from the input
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle file upload and blockchain transaction
  const handleUpload = async (e) => {
    e.preventDefault();
    setError('');
    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }
    if (!contract) {
      setError("Smart contract not loaded. Please ensure your wallet is connected.");
      console.warn("Contract not loaded — check if account is null or contract address is wrong.");
      return;
    }

    try {
      setTxStatus("Uploading file to IPFS via NFT.Storage...");
      const cid = await uploadFile(selectedFile);
      setTxStatus(`File uploaded! CID: ${cid}. Submitting transaction to blockchain...`);

      const tx = await contract.uploadResume(cid);
      await tx.wait();
      setTxStatus("Resume stored on blockchain successfully!");
      setSelectedFile(null);

    } catch (err) {
      console.error(err);
      setError("Transaction failed: " + err.message);
      setTxStatus("");
    }
  };

  return (
    <Container>
      <Navbar />
      <Content>
        <Heading>Vault</Heading>
        <SubHeading>Upload and store your resume on the blockchain</SubHeading>
        <Form onSubmit={handleUpload}>
          <FileInputLabel htmlFor="fileUpload">Choose a resume file:</FileInputLabel>
          <FileInput id="fileUpload" type="file" onChange={handleFileChange} />
          <Button type="submit">Upload Resume</Button>
        </Form>
        {txStatus && <Status>{txStatus}</Status>}
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <Placeholder>
          Future functionality: List your uploaded resumes here.
        </Placeholder>
      </Content>
      <Footer />
    </Container>
  );
};

// Styled Components
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
  margin-bottom: 1rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
`;
const FileInputLabel = styled.label`
  font-size: 1rem;
  color: navy;
`;
const FileInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;
const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: darkgreen;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`;
const Status = styled.p`
  margin-top: 1rem;
  color: darkblue;
`;
const ErrorMsg = styled.p`
  margin-top: 1rem;
  color: red;
`;
const Placeholder = styled.p`
  margin-top: 2rem;
  color: gray;
`;

export default Vault;
