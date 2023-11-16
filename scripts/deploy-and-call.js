// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const LinearCurve = await hre.ethers.getContractFactory("LinearCurve");
  const linearCurve = await LinearCurve.deploy();
  await linearCurve.deployed();
  console.log("LinearCurve contract deployed to:", linearCurve.address);

  const ExponentialCurve = await hre.ethers.getContractFactory("LinearCurve");
  const exponentialCurve = await ExponentialCurve.deploy();
  await exponentialCurve.deployed();
  console.log("ExponentialCurve contract deployed to:", exponentialCurve.address);

  const XykCurve = await hre.ethers.getContractFactory("LinearCurve");
  const xykCurve = await XykCurve.deploy();
  await xykCurve.deployed();
  console.log("XykCurve contract deployed to:", xykCurve.address);

  const EnumerableETHTemplate = await hre.ethers.getContractFactory("LSSVMPairEnumerableETH");
  const enumerableETHTemplate = await EnumerableETHTemplate.deploy();
  await enumerableETHTemplate.deployed();
  console.log("EnumerableETHTemplate contract deployed to:", enumerableETHTemplate.address);
  const _enumerableETHTemplate = enumerableETHTemplate.address;

  const MissingEnumerableETHTemplate = await hre.ethers.getContractFactory("LSSVMPairMissingEnumerableETH");
  const missingEnumerableETHTemplate = await MissingEnumerableETHTemplate.deploy();
  missingEnumerableETHTemplate.deployed();
  console.log("MissingEnumerableETHTemplate contract deployed to:", missingEnumerableETHTemplate.address);
  const _missingEnumerableETHTemplate = missingEnumerableETHTemplate.address;

  const EnumerableERC20Template = await hre.ethers.getContractFactory("LSSVMPairEnumerableERC20");
  const enumerableERC20Template = await EnumerableERC20Template.deploy();
  enumerableERC20Template.deployed();
  console.log("EnumerableERC20Template contract deployed to:", enumerableERC20Template.address);
  const _enumerableERC20Template = enumerableERC20Template.address;

  const MissingEnumerableERC20Template = await hre.ethers.getContractFactory("LSSVMPairMissingEnumerableERC20");
  const missingEnumerableERC20Template = await MissingEnumerableERC20Template.deploy();
  missingEnumerableERC20Template.deployed();
  console.log("MissingEnumerableERC20Template contract deployed to:", missingEnumerableERC20Template.address);
  const _missingEnumerableERC20Template = missingEnumerableERC20Template.address;

  const _protocolFeeRecipient = "0x80ED92174A286A623536c289b69d36DC40ADae85";

  // MAX_PROTOCOL_FEE = 0.10e18
  // _protocolFeeMultiplier <= MAX_PROTOCOL_FEE
  const _protocolFeeMultiplier = hre.ethers.utils.parseEther("0.05");
  const PairFactory = await hre.ethers.getContractFactory("LSSVMPairFactory");
  const pairFactory = await PairFactory.deploy(_enumerableETHTemplate, _missingEnumerableETHTemplate, _enumerableERC20Template, _missingEnumerableERC20Template, _protocolFeeRecipient, _protocolFeeMultiplier);
  await pairFactory.deployed();
  console.log("LSSVMPairFactory contract deployed to:", pairFactory.address);
  // const _factory = pairFactory.address;
  const _factory = "0xD85d8F276BDEcAe909268cbD6643F462682ee4eD";

  const LSSVMRouter = await hre.ethers.getContractFactory("LSSVMRouter");
  const lSSVMRouter = await LSSVMRouter.deploy(_factory);
  await lSSVMRouter.deployed();
  console.log("LSSVMRouter contract deployed to:", lSSVMRouter.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});