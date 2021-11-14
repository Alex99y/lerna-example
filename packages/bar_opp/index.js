const crypto = require("crypto")

/**
 * 
 * @param {string} message 
 * @returns {string} Return sha256 hash
 */
module.exports = (message) => {
    return crypto.createHash("SHA256").update(Buffer.from(message, "utf-8")).digest("hex")
}