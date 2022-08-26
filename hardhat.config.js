require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("./tasks/block-number")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
    // You need to export an object to set up your config
    // Go to https://hardhat.org/config/ to learn more
    /**
     * @type import('hardhat/config').HardhatUserConfig
     */

const COINMARKETCAP_API_KEY =
    process.env.COINMARKETCAP_API_KEY || "aafec82b-0f98-4edd-8f19-3c17bf937158"
const RINKEBY_RPC_URL =
    process.env.RINKEBY_RPC_URL ||
    "https://eth-rinkeby.alchemyapi.io/v2/gwJVUsTDUZ4PDyvafxFACgMCGNW8NQAB"
const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "0xdc50b630f2a28ad4b872e39e28a982e0373ca3a750e8286a8bb1cae389c588f9"
const ETHERSCAN_API_KEY =
    process.env.ETHERSCAN_API_KEY || "ECYTRYG1DYTRDAP2J78YK7E98CU86U1YWA"

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            initialBaseFeePerGas: 0,
        },
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
        },
        localhost: {
            url: "http://localhost:8545",
            chainId: 31337,
        },
    },
    solidity: "0.8.8",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
}