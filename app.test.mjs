import { createPoll } from "../src/app.js";
import { assert } from "chai"; // Import assert from Chai

describe("createPoll", () => {
  it("should create a new poll", () => {
    // Simulate user input
    const question = "Test Poll";
    const option1 = "Option 1";
    const option2 = "Option 2";

    // Call the createPoll function
    const result = createPoll(question, [option1, option2]);

    // Verify the result
    assert.equal(result.question, question, "Incorrect question");
    assert.deepEqual(result.options, [option1, option2], "Incorrect options");
  });
});
