// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract wallet{
    address public owner;

    struct transaction {
        address from;
        address to;
        uint256 amount;
        uint256 timestamp;
    }

    struct cooldown {
        bool isSealed;
        string message;
    }

    transaction[] public alltransactions;
    mapping(address => transaction[]) private transactions;
    mapping(address => cooldown) private walletCooldown;

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, 'Caller is not owner');
        _;
    }

    function logTransaction(address recipient, uint256 amount) public {
        require(amount > 0, "Must send some Ether");
        require(recipient != address(0), "Invalid recipient address");

        transaction memory txrecord = transaction({
            from: msg.sender,
            to: recipient,
            amount: amount,
            timestamp: block.timestamp
        });
        
        transactions[msg.sender].push(txrecord);
        transactions[recipient].push(txrecord);

        alltransactions.push(txrecord);
    }

    function getTransactionHistory(address user) external view returns (transaction[] memory){
        return transactions[user];
    }

    function getAllTransactions() external view returns (transaction[] memory){
        return alltransactions;
    }

    function getRecentTransactions() external view returns(transaction[] memory){
        uint256 size = alltransactions.length;
        uint256 startindex = size > 100 ? size - 100 : 0;
        transaction[] memory recentTransaction = new transaction[](size - startindex);

        for(uint256 i = startindex; i < size; i++){
            recentTransaction[i-startindex] = alltransactions[i];
        }

        return recentTransaction;
    }

    function createWallet() external {
        cooldown memory cooldownrecord = cooldown({
            isSealed: true,
            message: "Please note that your account is currently under KYC (Know Your Customer) review. For security reasons, you will not be able to perform any transactions until the verification process is successfully completed. We appreciate your understanding and cooperation in maintaining a secure environment for all users."
        });
        walletCooldown[msg.sender] = cooldownrecord; 
    }

    function enablecooldown(address user, string memory message) external {
        cooldown memory cooldownrecord = cooldown({
            isSealed: true,
            message: message
        });
        walletCooldown[user] = cooldownrecord; 
    }

    function disablecooldown(address user) external {
        cooldown memory cooldownrecord = cooldown({
            isSealed: true,
            message: "-"
        });
        walletCooldown[user] = cooldownrecord; 
    }
}