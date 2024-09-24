// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract Wallet {
    mapping(address => bytes32) private passwordHashes;

    function setPassword(string memory _password) public {
        passwordHashes[msg.sender] = keccak256(abi.encodePacked(_password));
    }

    function verifyPassword(string memory _password) public view returns (bool) {
        return passwordHashes[msg.sender] == keccak256(abi.encodePacked(_password));
    }
}
