var calculator = require('../lib/calculator');
var expect = require("chai").expect;

describe('calculator', function() {
    describe('Verify the #add(n1, n2)', function() {
        it('Should return n1 plus n2', function() {
            expect(calculator.add(2, 2)).to.be.equal(4);
        })
    }),
    describe('Verify the #minus(n1, n2)', function() {
        it('Should return n1 minus n2', function() {
            expect(calculator.minus(13, 4)).to.be.equal(9);
        })
    }),
    describe('Verify the #multiply(n1, n2)', function() {
        it('Should return n1 times n2', function() {
            expect(calculator.multiply(5,5)).to.be.equal(25);
        })
    }),
    describe('Verify the #divide(n1, n2)', function() {
        it('Should return n1 divided by n2', function() {
            expect(calculator.divide(100, 10)).to.be.equal(10);
        }),
        it('Should throw an error on division by zero', function() {
            expect(() => calculator.divide(15, 0)).to.throw();
        })
    })
})