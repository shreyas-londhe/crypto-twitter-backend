import React from "react";
import { getUserInfo, createUser } from "../web3/users";

export default class IndexPage extends React.Component {
  logUser = async () => {
    const userInfo = await getUserInfo(1);
    console.log(userInfo);
  };

  createUser = async () => {
    const tx = await createUser("shryasss");
    console.log(tx);
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.logUser}>Click to get UserInfo</button>
        <button onClick={this.createUser}>Click to create user</button>
      </div>
    );
  }
}
