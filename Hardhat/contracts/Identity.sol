// contracts/Identity.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Identity {
    struct User {
        string name;
        bool exists;
        string[] credentials;
    }

    mapping(address => User) private users;

    function createIdentity(string memory _name) public {
        require(!users[msg.sender].exists, "Identity already exists");
        users[msg.sender] = User({
            name: _name,
            exists: true,
            credentials: new string     });
    }

    function addCredential(string memory _credentialHash) public {
        require(users[msg.sender].exists, "Identity does not exist");
        users[msg.sender].credentials.push(_credentialHash);
    }

    function getCredentials(address _user) public view returns (string[] memory) {
        require(users[_user].exists, "Identity does not exist");
        return users[_user].credentials;
    }

    function identityExists(address _user) public view returns (bool) {
        return users[_user].exists;
    }
}
