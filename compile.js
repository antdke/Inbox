// compile code will go here
const path = require('path'); // path
const fs = require('fs'); // filesystem
const solc = require('solc'); // solidity compiler

// allows for the file path to Inbox.sol to be understood cross-platform (Windows, Unix, etc)
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// extracts the contents of the Inbox.sol file (the contract code)
const source = fs.readFileSync(inboxPath, 'utf8');

// sending the contents of the contract to the solidity compiler
// exports the contents to be read by other files that require/call this file
module.exports = solc.compile(source, 1)['contracts'][':Inbox']; // destructuring the Inbox object from inside the contracts object that's returned on compilation

