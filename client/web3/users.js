import { eth, getInstance } from "./provider";
import UserStorage from "./artifacts/UserStorage.json";
import UserController from "./artifacts/UserController.json";

export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage);
  const profile = await storage.profiles.call(userId);
  return profile;
};

export const createUser = async (username) => {
  const controller = await getInstance(UserController);

  try {
    await ethereum.enable();
    const addresses = await eth.getAccounts();
    const result = await controller.createUser(eth.utils.fromAscii(username), {
      from: addresses[0],
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};
