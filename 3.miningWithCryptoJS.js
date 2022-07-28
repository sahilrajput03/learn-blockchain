const CryptoJS = require('crypto-js')
/**
 * Code copied from:
 * https://github.com/guggero/blockchain-demo
 * Demo of original: https://guggero.github.io/blockchain-demo/#!/block
 */

const vm = {
	number: 1,
	dataString: JSON.stringify({}, null, 2),
	prev: '0000000000000000000000000000000000000000000000000000000000000000',
	// nonce: 23344, // CORRECT
	nonce: 0, // to_be_calculated
	hash: '', // to_be_calculated
}

function validHash(hash, difficultyPrefix) {
	return hash.indexOf(difficultyPrefix) === 0
}

function hashFunction(input) {
	return CryptoJS.SHA256(input).toString()
}

function hashBlock(blockNumber, nonce, data, prev) {
	return hashFunction([blockNumber, nonce, data, prev].join(''))
}

//! ~Sahil Increase this number to increase the difficulty in mining
const _difficulty = 4 // i.e., hash should start with 4 zeroes
function difficultyPrefixROOT(difficulty) {
	var diff = difficulty || _difficulty
	var result = ''
	for (var i = 1; i <= diff; i++) {
		result += '0'
	}
	return result
}

function round(number, digits) {
	var exp = Math.pow(10, digits)
	return (Math.round(number * exp) / exp).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")
}
function mine() {
	var difficultyPrefix = difficultyPrefixROOT()
	var start = new Date().getTime()

	// either we're already valid or we start at the beginning
	if (!validHash(vm.hash, difficultyPrefix)) {
		var nonce = -1
		var currentHash = null

		// do the mining
		do {
			nonce++
			currentHash = hashBlock(vm.number, nonce, vm.dataString, vm.prev)
		} while (!validHash(currentHash, difficultyPrefix))

		// ? SAHIL THIS IS MINED NONCE, YO!!!
		//! finished, set mined nonce
		vm.nonce = nonce
		// console.log('~Sahil: MINED NONCE:', nonce)
		var duration = new Date().getTime() - start
		var seconds = duration / 1000
		vm.miningStats = ' took ' + round(seconds, 1) + 's, speed: ' + round(nonce / seconds, 0) + ' hashes/s'
	}
}
function updateBlock() {
	vm.hash = hashBlock(vm.number, vm.nonce, vm.dataString, vm.prev)
	vm.valid = validHash(vm.hash, difficultyPrefixROOT())
	if (!vm.valid) {
		vm.mined = false
	}
}

mine()
vm.mined = true
updateBlock()

console.log('~Sahil: MINED NONCE::', vm.nonce)
console.log('~Sahil: Block Hash::', vm.hash)
console.log('~Sahil: MINING STATS::', vm.miningStats)
