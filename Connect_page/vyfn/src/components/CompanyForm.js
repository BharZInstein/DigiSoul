import React, { useState } from 'react';
import Hero from './Hero';
import './CompanyForm.css';

const CompanyForm = ({ contract, account }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyDetails, setCompanyDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contract) {
      try {
        await contract.store(companyName);
        alert('Company name stored successfully!');
      } catch (error) {
        console.error('Error storing company name:', error);
        alert('Error storing company name. Check console for details.');
      }
    } else {
      alert('Contract not available. Please make sure you are connected to the correct network.');
    }
  };

  const handleRetrieve = async () => {
    if (contract) {
      try {
        const retrievedName = await contract.retrieve();
        setCompanyDetails(retrievedName);
      } catch (error) {
        console.error('Error retrieving company name:', error);
        alert('Error retrieving company name. Check console for details.');
      }
    } else {
      alert('Contract not available. Please make sure you are connected to the correct network.');
    }
  };

  return (
    <div className="company-container">
      <Hero 
        onConnectWallet={() => {
          if (typeof window.ethereum !== 'undefined') {
            window.ethereum.request({ method: 'eth_requestAccounts' });
          } else {
            alert('Please install MetaMask!');
          }
        }}
        isConnected={!!account}
      />
      {account ? (
        <div className="company-details-box">
          <h2>Company Details</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
              required
            />
            <button type="submit">Store Company Name</button>
          </form>
          <button onClick={handleRetrieve}>Retrieve Company Name</button>
          {companyDetails && <p>Retrieved Company Name: {companyDetails}</p>}
        </div>
      ) : (
        <p>Please connect your wallet to interact with the contract.</p>
      )}
    </div>
  );
};

export default CompanyForm;

