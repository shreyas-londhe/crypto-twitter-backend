const utils = require("../utils");
const { assertVMException } = utils;

const TweetStorage = artifacts.require("TweetStorage");

contract("tweets", () => {
  // before(async () => {
  //   const tweetStorage = await TweetStorage.deployed();
  //   await tweetStorage.createTweet(1, "Hello world!");
  // });

  it("can't create tweet without controller", async () => {
    const storage = await TweetStorage.deployed();
    try {
      const tx = await storage.createTweet(1, "tristan");
      assert.fail();
    } catch (err) {
      assertVMException(err);
    }
  });

  it("can get tweet", async () => {
    const storage = await TweetStorage.deployed();

    const tweet = await storage.tweets.call(1);
    const { id, text, userId } = tweet;

    assert.equal(parseInt(id), 1);
    assert.equal(text, "Hello world!");
    assert.equal(parseInt(userId), 1);
  });
});
