const { ethers } = require("ethers"); // Import the ethers.js library to interact with the blockchain

async function main() {
    // URL of the RPC for the Binance Smart Chain Testnet
    const provider = new ethers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545'); // Create a JSON-RPC provider to connect to the BSC Testnet

    const address = "0xd3f6e1df1c3037dcce7e60543e825a5ad2d08380"; // Define the address of the wallet to query

    try {
        const blockNumber = await provider.getBlockNumber(); // Get the number of the latest block on the blockchain
        console.log("Connected to BSC Testnet, latest block:", blockNumber); // Print the number of the latest block

        const balance = await provider.getBalance(address); // Get the balance of the specified wallet
        const balanceInEther = ethers.formatEther(balance); // Convert the balance from wei to ether (BNB in this case)
        console.log(`Balance of wallet ${address}: ${balanceInEther} BNB`); // Print the balance of the wallet in BNB
    } catch (error) {
        console.error("Error:", error); // Handle any errors that occur during execution
    }
}

main(); // Call the main function to execute the code