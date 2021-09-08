// compile code will go here
const path = require('path'); // path
const fs = require('fs'); // filesystem
const solc = require('solc'); // solidity compiler

// allows for the file path to Inbox.sol to be understood cross-platform (Windows, Unix, etc)
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// extracts the contents of the Inbox.sol file
const source = fs.readFileSync(inboxPath, utf8);

// sending the contents of the contract to the solidity compiler
console.log(solc.compile(source, 1));
