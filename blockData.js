const blockNumber = 1,
	nonce = 23344,
	data = {},
	prev = '0000000000000000000000000000000000000000000000000000000000000000'

const inputForBlockObject = {
	blockNumber,
	nonce,
	data,
	prev,
}

const inputForBlockString = [blockNumber, nonce, JSON.stringify(data, null, 2), prev].join('')

module.exports = {inputForBlockString, inputForBlockObject}
