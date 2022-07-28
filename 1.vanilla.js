// GENERALLY CREATING SHA256
// src: https://nodejs.org/api/crypto.html#class-hash
const {inputForBlockString, inputForBlockObject} = require('./blockData')

async function main() {
	const {createHash} = await import('node:crypto')

	const hash = createHash('sha256')

	// hash.update('some data to hash')
	// console.log(hash.digest('hex')) // 6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
	//
	hash.update(inputForBlockString)
	console.log('hash:', hash.digest('hex'))
	// 00007f927a0bac0164b4e4bc373e30a9be100f5b077e58ca8be31aa84fa34945
}

main()
