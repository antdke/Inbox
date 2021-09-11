// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor of the web3.js library
const web3 = new Web3(ganache.provider()); // instance

// example test code

class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

// mocha test code

describe('Car', () => {
  it('can park', () => {
    // create an instance of Car and test it
    const car = new Car();
    assert.equal(car.park(), 'stopped');
  })
})

