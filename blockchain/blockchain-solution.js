// Simple Block class to represent each block in the blockchain

// Utility function for hashing (SHA-256)
const crypto = require("crypto");
class Block {
	constructor(index, timestamp, pointsData, previousHash = "") {
		this.index = index;
		this.timestamp = timestamp;
		this.pointsData = pointsData; // Loyalty points transaction data
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
		this.nonce = 0; // For PoW
	}

	// Calculate the hash of the block
	calculateHash() {
		return crypto
			.createHash("sha256")
			.update(
				this.index +
					this.previousHash +
					this.timestamp +
					JSON.stringify(this.pointsData) +
					this.nonce
			)
			.digest("hex");
	}

	// Simple Proof of Work mechanism
	mineBlock(difficulty) {
		//checkes if the first starting characters of the hash are equal to the number of zeros Array(difficulty + 1).join("0"))
		console.log("Mining block...");
		while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
			//increase the nonce until the hash starts with a certain number of zeros by 1
			this.nonce++;
			this.hash = this.calculateHash();
			console.log(this.hash);
		}
		console.log("Block mined: " + this.hash);
	}
}

// Simple Blockchain class to represent the chain of blocks
class Blockchain {
	constructor() {
		this.chain = [this.createGenesisBlock()];
		this.difficulty = 1; //Difficulty level (more zeros = more difficult as the targert becomes smaller and smaller)
		this.pendingTransactions = [];
		this.miningReward = 10; // Reward points for mining
	}

	// Create the first block (Genesis block)
	createGenesisBlock() {
		return new Block(0, Date.now(), { customer: "genesis", points: 0 }, "0");
	}

	// Get the latest block
	getLatestBlock() {
		return this.chain[this.chain.length - 1];
	}

	// Add a new block to the blockchain
	addBlock(newBlock) {
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.mineBlock(this.difficulty);
		this.chain.push(newBlock);
	}

	// Add a new transaction (loyalty points transaction)
	addTransaction(transaction) {
		this.pendingTransactions.push(transaction);
	}

	// Reward for mining
	minePendingTransactions() {
		const rewardTransaction = {
			customer: "reward-system",
			points: this.miningReward,
		};
		this.pendingTransactions.push(rewardTransaction);

		const block = new Block(
			this.chain.length,
			Date.now(),
			this.pendingTransactions,
			this.getLatestBlock().hash
		);

		//this going to continuously run until the hash of the block starts with a certain number of zeros
		block.mineBlock(this.difficulty);
		this.chain.push(block);

		this.pendingTransactions = []; // Clear the pending transactions
	}

	// Validate the blockchain
	isChainValid() {
		for (let i = 1; i < this.chain.length; i++) {
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i - 1];

			// Check if the block's hash is correct
			if (currentBlock.hash !== currentBlock.calculateHash()) {
				return false;
			}

			// Check if the previous block's hash is correct
			if (currentBlock.previousHash !== previousBlock.hash) {
				return false;
			}
		}
		return true;
	}

	// View the blockchain
	getBlockchain() {
		return this.chain;
	}
}

// Create a new blockchain
let loyaltyProgramBlockchain = new Blockchain();

// Add some transactions (loyalty points earned)
loyaltyProgramBlockchain.addTransaction({ customer: "customer1", points: 50 });
loyaltyProgramBlockchain.addTransaction({ customer: "customer2", points: 30 });

loyaltyProgramBlockchain.addTransaction({ customer: "Danile", points: 30 });
loyaltyProgramBlockchain.addTransaction({ customer: "Ravi", points: 40 });
// Mine the transactions into a block
loyaltyProgramBlockchain.minePendingTransactions();

// Add another set of transactions
loyaltyProgramBlockchain.addTransaction({ customer: "customer1", points: 20 });
loyaltyProgramBlockchain.addTransaction({ customer: "customer3", points: 40 });

// Mine these new transactions
loyaltyProgramBlockchain.minePendingTransactions();

// Validate the blockchain
console.log("Blockchain valid: " + loyaltyProgramBlockchain.isChainValid());

// Output the blockchain
console.log(JSON.stringify(loyaltyProgramBlockchain.getBlockchain(), null, 4));
