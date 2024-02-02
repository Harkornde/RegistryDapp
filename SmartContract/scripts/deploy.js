const hre = require("hardhat");

async function main() {
  const simpleRegistry = await hre.ethers.deployContract("SimpleRegistry", ["Jubril", 12]);

  await simpleRegistry.waitForDeployment();

  console.log(
    ` deployed to ${
      simpleRegistry.target
    }`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// 0x1c1915f7c03f5aabEdc28864098d89eDd8241D05