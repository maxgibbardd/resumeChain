import { useContext } from 'react';
import { WalletContext } from '../pages/_app';

export function useWallet() {
  const { account, setAccount } = useContext(WalletContext);

  async function connect() {
    if (!window.ethereum) throw new Error("Install MetaMask");
    const [addr] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(addr);
  }

  return { account, connect };
}
