// 2_deploy_contracts.js
const PollContract = artifacts.require("PollContract");

module.exports = function(deployer) {
  deployer.deploy(PollContract);
};
