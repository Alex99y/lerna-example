const algosdk = require('algosdk')

module.exports = (address) => {
    return algosdk.isValidAddress(address)
}