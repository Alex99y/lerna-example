const { expect } = require("chai")
const sha256 = require("./index")

describe ("Test bar", () => {
    it ("Should work", () => {
        expect(sha256("Hello World!")).to.be.equal("7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069")
    })
    it ("Should not work", () => {
        expect(sha256("Hello World! 2")).not.to.be.equal("7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069")
    })
})