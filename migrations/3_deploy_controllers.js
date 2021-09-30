const UserController = artifacts.require("UserController");
const TweetController = artifacts.require("TweetController");

module.exports = (deployer) => {
  deployer.deploy(UserController);
  deployer.deploy(TweetController);
};
