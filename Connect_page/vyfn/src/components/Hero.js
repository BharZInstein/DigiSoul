import React from 'react';

const Hero = ({ onConnectWallet, isConnected }) => {
  const benefits = [
    {
      title: "UNLEASH YOUR IDENTITY",
      description: "Power up your digital presence with blockchain security"
    },
    {
      title: "MAXIMUM ACCESS",
      description: "One pass to dominate the entire Web3 universe"
    },
    {
      title: "ABSOLUTE CONTROL",
      description: "Take command of your digital destiny"
    }
  ];

  return (
    <div className="hero-container">
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <h3>{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
      <h1 className="hero-title">Get Soul Pass</h1>
      {!isConnected && (
        <button className="connect-button" onClick={onConnectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Hero;

