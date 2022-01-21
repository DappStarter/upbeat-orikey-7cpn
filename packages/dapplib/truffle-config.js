require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift response situate coin grace sister army ghost'; 
let testAccounts = [
"0xc60f2a796ad0549fae2dabbc221ce1a356356c49b3fcdd5d2d75c2513e0fd5b9",
"0xdf5d0cde0827c5e201d37bc9b37f24f1f66350601c098d5565559ce967b027e3",
"0x62ca1b091d54c55c48ea039aca0234da23811f79a13a09605e6bdda22ffa76ea",
"0x59b65b9cdc993a1c59df4fbc2725e58646a29d35a935c8e75da6caa87d40df34",
"0x7eaba371f19d2d9819fc2f0a13d2e9b7693acf319308ca2eb37cf71d1a3ced75",
"0xa61ef220bab2a357fc591df419fe1e5051abacbae00a2fb4b269f46a73f762f2",
"0x927878d799fbdec625fc440e38a899932f89145cd760ea38ec8989253c86afba",
"0x189fda95a6dd622d69b54cbaaf22e559b8fb4036387b25e11d6d9b44a9eb205b",
"0x2217deae810ff5f5ba7e977c0c5b388fa46725f2e91778381d53d07e87abebb8",
"0x0ed1d525d59d1edfaf2765b7333a49d0ae36c1214773e22efec39792e8d6e08d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


