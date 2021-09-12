// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor of the web3.js library
const web3 = new Web3(ganache.provider()); // instance
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
const INITIAL_STRING = 'Hey Anthony! :)'

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [INITIAL_STRING] })
    .send({ from: accounts[0], gas: '1000000' })
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    // test if the contract has an address on the Eth network (aka it has been deployed)
    assert.ok(inbox.options.address);
  })

  it('has a default message', async () => {
    // test if the message var in the contract has a default value
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_STRING);
  })
})