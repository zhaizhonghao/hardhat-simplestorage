require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL = process.env.SEPOLIA_URL|| "";
const PRI_KEY_SEPOLIA = process.env.PRI_KEY_SEPOLIA|| "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    sepolia: {
      url: SEPOLIA_URL,
      accounts:[PRI_KEY_SEPOLIA],
      chainId:11155111
    },
    localhost:{
      url:"http://127.0.0.1:8545/",
      chainId:31337
    }
  },
  solidity: "0.8.18",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter:{
    enabled:true,
    outputFile:"gas-report.txt",
    noColors:true,
    currency:"USD"
  }
};
