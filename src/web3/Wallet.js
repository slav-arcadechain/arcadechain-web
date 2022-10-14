import { useWeb3Contract } from "react-moralis";
import { useMoralis } from "react-moralis";

function test() {
  const { isAuthenticated, authenticate } = useMoralis();
  console.log(isAuthenticated);
  // if (!isAuthenticated) {
  //   authenticate({ provider: "metamask" });
  // }
}

export default test;
