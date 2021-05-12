require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million purpose hunt process swift true'; 
let testAccounts = [
"0x4dee168577c687e7a3e0f3480de1ead7a8039bf0f687ef18710e1b3a0cb05146",
"0x5d5106331d2a41ca43d044f466cc79ca5cb523b03037ef84f33420cfa2cd291c",
"0xf1b9e4569877fe20e7d0e880cb962444212d510dc4824f1fcfd279ab1794376c",
"0x2acae8ff4353f2e79b7253f7672992448dff188cee4ada34edbb682e97a24c9a",
"0x13f06219b6c904c429a82304bde4fac73c1bff076b5bfc77b3641c50c527b39b",
"0xa4518230c7c86f26eeb7ddb2675098607a3ce8e467cb0c143bd4f4aefa807f90",
"0x51b18dd1169449dcedff8fe0191b2fda2893d3de0739412c6335afb35b9bcf0e",
"0xcc873b6486608210ed44025ad0c74e0523a67099360a54f27416791980bf54f0",
"0xc2776e3f12f3eb13ef4520bc158e365be217ddf609905d93f52983bd5bc3e8f0",
"0xe593ae38c8868c6782c6b778f348b37160c27201d4250b8e48e251d46b887301"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
