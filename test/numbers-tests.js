const expect = require('chai').expect;

const add = require('../js/numbers-funcs').add;
const substract = require("../js/numbers-funcs").substract;
const multiply = require("../js/numbers-funcs").multiply;
const divide = require("../js/numbers-funcs").divide;

const filterOdds = require("../js/numbers-funcs").filterOdds;

describe('math functions tests', () => { // test name
  // it('add() should add two numbers', () => { // test name's type
  //   // add()
  //   var add1 = add(1, 100);
  //   var add2 = add(5, -11);
  //   var add3 = add(-10, 33);
  //   var add4 = add(-10, -33);

  //   expect(add1).equal(101);
  //   expect(add2).equal(-6);
  //   expect(add3).equal(23);
  //   expect(add4).equal(-43);

  // });
  // //Add more tests here:
  // it("substract() should substract two numbers", () => {
  // 	// substract()
  // 	var substract1 = substract(1, -100);
  // 	var substract2 = substract(45, 44);
  // 	var substract3 = substract(-32, -32);
  // 	var substract4 = substract(-33, -40);

  // 	expect(substract1).equal(101);
  // 	expect(substract2).equal(1);
  // 	expect(substract3).equal(0);
  // 	expect(substract4).equal(7);
  // });

  // it("multiply() should substract two numbers", () => {
  // 	// multiply()
  // 	var multiply1 = multiply(2, 3);
  // 	var multiply2 = multiply(-0.1, 10);
  // 	var multiply3 = multiply(-5, -5);
  // 	var multiply4 = multiply(2, 0.5);

  // 	expect(multiply1).equal(6);
  // 	expect(multiply2).equal(-1);
  // 	expect(multiply3).equal(25);
  // 	expect(multiply4).equal(1);
  // });

  // it("divide() should substract two numbers", () => {
  // 	// divide()
  // 	var divide1 = divide(1, 100);
  // 	var divide2 = divide(2, 4);
  // 	var divide3 = divide(-32, 0.5);

  // 	expect(divide1).equal(.01);
  // 	expect(divide2).equal(.5);
  // 	expect(divide3).equal(-64);
  // });

  it("filterOdds()'s expected input: num array | output: odds array  ", () => {
  	var filterOdds1 = filterOdds([1, 2, 4, 2, 5]);
  	var filterOdds2 = filterOdds([-1, 2, -4, 2, -5]);
  	var filterOdds3 = filterOdds([1.1, 3, -11, 2.5, 5]);

  	// equal is equivalent to "==="; eql: "=="
  	expect(filterOdds1).eql([1, 5]);
  	expect(filterOdds2).eql([-1, -5]);
  	expect(filterOdds3).eql([3, -11, 5]);
  })

});
