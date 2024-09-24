// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract transaction{
    uint256 txCnt;

    struct transaction_structure{
        address from;
        address to;
        string encrypted_name;
        string encrypted_phone;
        string encrypted_email;
        uint256 amount;
    }
}