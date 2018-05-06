var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {

  beforeEach(function () {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it('should be able to add 1+4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  });

  it('should be able to subtract 7-4 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  });

  it('should be able to multiply 3x5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  });

  it('should be able to divide 21/7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  });

  it('should be able to concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal(calculator.runningTotal, 123);
  });

  it('should be able to chain multiple operations together', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.numberClick(9);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 8);
  });

  it('should be able to clear the running total without affecting the calculation', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 14);
  });

});
