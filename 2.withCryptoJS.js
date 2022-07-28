/**
 * Code Source
 * Github(13.2K*): https://github.com/guggero/blockchain-demo
 * Demo of original: https://guggero.github.io/blockchain-demo/#!/block
 */

const CryptoJS = require('crypto-js')
const {inputForBlockString, inputForBlockObject} = require('./blockData')

const hash = CryptoJS.SHA256(inputForBlockString).toString()
console.log('hash:', hash)
// 00007f927a0bac0164b4e4bc373e30a9be100f5b077e58ca8be31aa84fa34945

const block = {...inputForBlockObject, hash}
console.log('block', block)
// DOCS (idk if this is real docs of above): https://cryptojs.gitbook.io/docs/
