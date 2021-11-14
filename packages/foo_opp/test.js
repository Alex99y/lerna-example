const { expect } = require('chai')
const test = require('./index')

const address = "W2TVRKTHYB7HDVUGI6E6AVAXDGFT3RJT3XZGB2TVOT53TAISPBO2F5R3HE"

describe ("Test foo", () => {
    it ("Should work", () => {
        expect(test(address)).to.be.equal(true)
    });
    it ("Should not work", () => {
        expect(test("invalid address")).to.be.equal(false)
    })
})