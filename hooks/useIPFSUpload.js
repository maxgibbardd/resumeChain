import { NFTStorage } from 'nft.storage';

export const useIPFSUpload = () => {
  const uploadFile = async (file) => {
    const client = new NFTStorage({
      token: process.env.NEXT_PUBLIC_NFT_STORAGE_KEY,
    });
    // Upload file to IPFS. storeBlob accepts a Blob, File, or similar.
    const cid = await client.storeBlob(file);
    return cid; // this is your IPFS hash (CID)
  };

  return { uploadFile };
};
