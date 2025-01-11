'use client';

import React, { useEffect, useState } from 'react';
import { ethers, BrowserProvider } from 'ethers';

export function WalletValue() {
  const [account, setAccount] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState<number>(0);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => { 
    const connectWallet = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          setIsConnecting(true);
          const provider = new BrowserProvider(window.ethereum);
          const accounts = await provider.send('eth_requestAccounts', []);
          setAccount(accounts[0]);

          const balance = await provider.getBalance(accounts[0]);
          const balanceInEth = parseFloat(ethers.formatEther(balance));
          setWalletBalance(balanceInEth);
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        } finally {
          setIsConnecting(false);
        }
      }
    };

    connectWallet();
  }, []);

  return (
    <div className="rounded-2xl bg-[#060709] p-6" id="myClasses">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Wallet Value</h3>
        <button className="text-gray-400 hover:text-gray-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {isConnecting ? (
        <div className="text-gray-400">Connecting to MetaMask...</div>
      ) : account ? (
        <>
          <div className="text-3xl font-bold mb-2">
            {walletBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 })} ETH
          </div>

          <div className="flex items-center gap-2 text-sm text-blue-400">
            <span>1 WALLET CONNECTED</span>
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-[#14151f]" />
            </div>
          </div>

          <div className="mt-2 text-xs text-gray-500 truncate">
            {account}
          </div>
        </>
      ) : (
        <div className="text-gray-400">Please connect your MetaMask wallet!</div>
      )}
    </div>
  );
}

