// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
  UserStorage _storage;

  constructor() {
    _storage = new UserStorage();
    _storage.setControllerAddr(address(this));
  }

  function testCreateFirstUser() public {
    uint _expectedId = 1;
    Assert.equal(_storage.createUser("tristan"), _expectedId, "Should create user with ID 1");
  }
}