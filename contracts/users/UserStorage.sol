// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '../helpers/BaseStorage.sol';

contract UserStorage is BaseStorage {

    struct Profile {
        uint id;
        bytes32 username;
    }

    mapping(uint => Profile) public profiles;

    uint latestUserId = 0;
  
    function createUser(bytes32 _username) public onlyController returns(uint) {
        latestUserId++;  
        profiles[latestUserId] = Profile(latestUserId, _username);
        return latestUserId;
    }
}
