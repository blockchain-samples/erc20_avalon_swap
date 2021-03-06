const { projectId, mnemonic, privateKeys } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },
    kovan: {
      provider: () => new HDWalletProvider(
	      privateKeys, `https://kovan.infura.io/v3/${projectId}`
      ),
      networkId: 42,
      gasPrice: 10e9
    },
    mainnet: {
      provider: () => new HDWalletProvider(
	      privateKeys, `https://mainnet.infura.io/v3/${projectId}`
      ),
      networkId: 1,
      gasPrice: 17e9
    }
  },
};
