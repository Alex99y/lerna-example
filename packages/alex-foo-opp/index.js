const algosdk = require('algosdk')

/**
 * 
 * @param {string} address 
 * @returns 
 */
module.exports = (address) => {
    return algosdk.isValidAddress(address)
}