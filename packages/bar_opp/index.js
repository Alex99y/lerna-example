const crypto = require("crypto")

/**
 * @description Get sha256 of a message
 * @param {string} message 
 * @returns {string} Return sha256 hash
 */
module.exports = (message) => {
    return crypto.createHash("SHA256").update(Buffer.from(message, "utf-8")).digest("hex")
}