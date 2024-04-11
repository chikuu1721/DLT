// truffle-config.js

module.exports = {
  networks: {
    // Configuration for the Ganache local blockchain
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify compiler version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
