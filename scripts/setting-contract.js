const hre = require("hardhat");

async function main() {
 
  const contractAddress = "0xD85d8F276BDEcAe909268cbD6643F462682ee4eD";
  const LSSVMPairFactory = await hre.ethers.getContractAt(
    "LSSVMPairFactory",
    contractAddress
  );

  const linerCurveContract = "0xAaf916638898F4AFb3f1ADeb1C5F3Ef0B4Fbf41b";
  const exponentialCurveContract = "0xda07966a209D788B5cEFB5170cDDDDD204B38bB2";
  await LSSVMPairFactory.setBondingCurveAllowed(linerCurveContract, true);
  await LSSVMPairFactory.setBondingCurveAllowed(exponentialCurveContract, true);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});