const { artifacts } = require('@truffle/contract');
// Import artifacts
const PollContract = artifacts.require("PollContract");

// Start contract test
contract("PollContract", accounts => {
  
  // Write a test case
  it("should create a new poll", async () => {
    // Deploy the contract
    const pollContractInstance = await PollContract.deployed();
    
    // Simulate user input
    const question = "What is your favorite color?";
    const options = ["Red", "Blue", "Green"];
    const endTime = Math.floor(Date.now() / 1000) + 86400; // End time is 1 day from now

    // Call the createPoll function
    await pollContractInstance.createPoll(question, options, endTime, { from: accounts[0] });

    // Get the created poll
    const poll = await pollContractInstance.getPoll(0); // Assuming poll ID is 0

    // Assert the created poll's properties
    assert.equal(poll.question, question, "Incorrect question");
    assert.deepEqual(poll.options, options, "Incorrect options");
    assert.equal(poll.endTime, endTime, "Incorrect end time");
  });
});
