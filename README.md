# Hardhat Tutorial

This project demonstrates how to compile, deploy and call smart contracts on Core TestNet using HardHat.

To run the project, you need to create a `secret.json` under the root folder and fill in as below. Or you can modify `hardhat.config.js` to setup your own configurations.

```json
{"PrivateKey":"you private key, do not leak this file, do keep it absolutely safe"}
```

Steps to run:

```shell
npm install
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy-and-call.js
```
npx hardhat verify contractaddress param1 param2

```````TEST NET
LinearCurve contract deployed to: 0xAaf916638898F4AFb3f1ADeb1C5F3Ef0B4Fbf41b
ExponentialCurve contract deployed to: 0xda07966a209D788B5cEFB5170cDDDDD204B38bB2
XykCurve contract deployed to: 0x18022E6aDA35c309169d096B686c94647cEeDa15
LSSVMPairFactory contract deployed to 0xD85d8F276BDEcAe909268cbD6643F462682ee4eD
LSSVMRouter contract deployed to 0x4af28441AC801939f10144a873A12a1a6a7f4F83
```````

```````MAIN NET
LinearCurve contract deployed to: 0x6394e43eB98c47dbeBe3964b92C172177C68E1FA
ExponentialCurve contract deployed to: 0x154AE9AEC6bc7BFD982A9E1B318F844D693b2d3E
XykCurve contract deployed to: 0x679d1427e239CeA51db5D1fE40522449093aD12e
EnumerableETHTemplate contract deployed to: 0xf031ce9fd92cb4B664BE4Cf18c1F1f12E6d3f106
MissingEnumerableETHTemplate contract deployed to: 0x32A0af4C6b5f1941F0F08e8e731f2928101A5A22
EnumerableERC20Template contract deployed to: 0xBC3Fa1253C92c82d2201a15d3C4703ae1473Bc24
MissingEnumerableERC20Template contract deployed to: 0x63021019CC7A62eac6AC7cd8e170d685Ee4BFCb8
LSSVMPairFactory contract deployed to: 0x55e351b5E390575a992A2b6A8d6535711DD43AA1
LSSVMRouter contract deployed to: 0xC577cd2f2cDd164E2899449b83a99b33CE18eE51
`````````````````````````