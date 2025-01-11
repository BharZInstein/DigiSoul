// contracts/CredentialManager.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CredentialManager {
    mapping(string => bool) private verifiedCredentials;

    function verifyCredential(string memory _credentialHash) public {
        require(!verifiedCredentials[_credentialHash], "Credential already verified");
        verifiedCredentials[_credentialHash] = true;
    }

    function isCredentialVerified(string memory _credentialHash) public view returns (bool) {
        return verifiedCredentials[_credentialHash];
    }
}
