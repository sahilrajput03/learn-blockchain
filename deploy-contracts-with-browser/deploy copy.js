const web3 = require('web3')

const abi = ''
const bytecode = ''

const arguments = []

const deployingContract = new web3.eth.Contract(abi).deploy({
	data: bytecode,
	arguments, // Arguments to the constructor
})

deployingContract
	.send(
		{
			from: '0x1234567890123456789012345678901234567891',
			gas: 1500000,
			gasPrice: '30000000000000',
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
	.on('confirmation', function (confirmationNumber, receipt) {})
	.then(function (newContractInstance) {
		console.log(newContractInstance.options.address) // instance with the new contract address
	})
