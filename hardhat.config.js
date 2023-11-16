/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");
//  require("@nomiclabs/hardhat-etherscan");

const { PrivateKey } = require("./secret.json");

module.exports = {
  defaultNetwork: "mainnet",

  etherscan: {
    apiKey: {
      coredao: "01bf85330ddd4595b03f832bf1c1f5ef",
    },
    customChains: [
      {
        network: "coredao",
        chainId: 1116,
        urls: {
          apiURL: "https://scan.coredao.org/api",
          browserURL: "https://scan.coredao.org/",
        },
      },
    ],
  },

  networks: {
    hardhat: {},
    testnet: {
      url: "https://rpc.test.btcs.network",
      accounts: [PrivateKey],
      chainId: 1115,
    },
    mainnet: {
      url: "https://rpc.coredao.org",
      accounts: [PrivateKey],
      chainId: 1116,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
