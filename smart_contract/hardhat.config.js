require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks:{
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/GRIRfkS8p_KDIhtPgEcauWBfjucLFolH",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
