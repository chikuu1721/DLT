// PollContract.sol
pragma solidity ^0.8.0;

contract PollContract {
    struct Poll {
        uint256 id;
        string question;
        string[] options;
        mapping(uint256 => uint256) votes;
        bool isOpen;
    }

    Poll[] public polls;
    uint256 public pollCount;

    event PollCreated(uint256 pollId, string question, string[] options);
    event Voted(uint256 pollId, uint256 option, uint256 voteCount);

    function createPoll(string memory _question, string[] memory _options) public {
        uint256 pollId = pollCount++;
        polls.push(Poll(pollId, _question, _options, true));
        emit PollCreated(pollId, _question, _options);
    }

    function vote(uint256 _pollId, uint256 _option) public {
        require(polls[_pollId].isOpen, "Poll is closed");
        require(_option < polls[_pollId].options.length, "Invalid option");

        polls[_pollId].votes[_option]++;
        emit Voted(_pollId, _option, polls[_pollId].votes[_option]);
    }

    function closePoll(uint256 _pollId) public {
        require(polls[_pollId].isOpen, "Poll is already closed");
        polls[_pollId].isOpen = false;
    }

    function getPoll(uint256 _pollId) public view returns (string memory, string[] memory, uint256[] memory) {
        Poll memory poll = polls[_pollId];
        uint256[] memory voteCounts = new uint256[](poll.options.length);

        for (uint256 i = 0; i < poll.options.length; i++) {
            voteCounts[i] = poll.votes[i];
        }

        return (poll.question, poll.options, voteCounts);
    }
}
