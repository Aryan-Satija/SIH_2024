const hre = require("hardhat");
(async()=>{
    const transaction = await hre.ethers.deployContract("wallet");
    await transaction.waitForDeployment();
    console.log(`contract deployed at ${transaction.target}`);
})()
.then(()=>{
    console.log('contract deployed successfully');
    process.exit(0);
})
.catch((err)=>{
    console.log('something went wrong');
    console.log(err);
    process.exit(1);
})