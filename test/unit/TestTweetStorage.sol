// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/tweets/TweetStorage.sol";

contract TestTweetStorage {
  TweetStorage _storage;

  constructor() {
    _storage = new TweetStorage();
    _storage.setControllerAddr(address(this));
  }

  function testCreateTweet() public {
    uint _userId = 1;
    uint _expectedTweetId = 1;

    Assert.equal(
      _storage.createTweet(_userId, "Hello world!"), 
      _expectedTweetId, 
      "Should create tweet with ID 1"
    );
  }
}