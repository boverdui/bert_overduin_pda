var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  for(let i = 0; i < 10; i++) {
    it(`should have a working number ${i} button`, function(){
      running_total = element(by.css('#running_total'));
      element(by.css(`#number${i}`)).click();
      expect(running_total.getAttribute('value')).to.eventually.equal(`${i}`);
    });
  }

  it('should have a working add button', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  });

  it('should have a working subtract button', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-3');
  });

  it('should have a working multiply button', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('15');
  });

  it('should have a working divide button', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  });

  it('should be able to chain multiple operations together', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8');
  });

  it('should work for positive numbers', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number1')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('5');
  });

  it('should work for negative numbers', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number1')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('-3');
  });

  it('should work for decimal numbers', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number1')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('0.25');
  });

  it('should work for very large numbers', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number1')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number1')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('1000000');
  });

  it('should display "Can\'t divide by 0" when dividing by 0', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number1')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('Can\'t divide by 0');
  });

  it('should be able to add to 0', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number0')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('should be able to subtract from 0', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number0')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('-4');
  });

  it('should be able to multiply 0', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number0')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('0');
  });

  it('should be able to divide 0', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number0')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('0');
  });

});
