// @ts-nocheck
import abi from './abi.js'
import bytecode from './bytecode.js'

// console.log('abi?', abi)
// console.log('bytecode.object?', bytecode.object)

// console.log('got web3?', Web3) // Its is accessible when we import 'node_modules/web3/dist/web3.min.js' in index.html head tag.

let account = null

void (async function () {
	if (!window.ethereum) return alert('window.ethereum is undefined')

	// 1. connect to metamask
	// await window.ethereum.send('eth_requestAccounts')
	const web3 = new Web3(window.ethereum)

	let accounts = await web3.eth.getAccounts()
	account = accounts[0]
	console.log('accounts?', accounts)

	const from = account

	const constructorArguments = [] // Arguments to the constructor

	// Deploy Docs: https://web3js.readthedocs.io/en/v1.8.0/web3-eth-contract.html#deploy
	const deployingContract = new web3.eth.Contract(abi).deploy({
		data: '0x' + bytecode.object,
		arguments: constructorArguments,
	})

	const estimatedGas = await deployingContract.estimateGas()
	console.log('estimatedGas?', estimatedGas)

	deployingContract
		.send(
			{
				from,
				gas: estimatedGas,
				// gasPrice: '30000000000000', // Optional Imo ~Sahil
			},
			function (error, transactionHash) {}
		)
		.on('error', function (error) {
			console.log('error?', {name: error.name, message: error.message})
		})
		.on('transactionHash', function (transactionHash) {
			console.log('transactionHash?', transactionHash)
		})
		.on('receipt', function (receipt) {
			console.log('receipt.contractAddress?', receipt.contractAddress) // contains the new contract address
		})
		.on('confirmation', function (confirmationNumber, receipt) {
			console.log('confirmation?', confirmationNumber, receipt)
		})
		.then(function (newContractInstance) {
			console.log('Address of the contract?', newContractInstance.options.address) // instance with the new contract address
		})
})()
