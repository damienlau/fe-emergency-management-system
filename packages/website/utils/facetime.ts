// const XYClient = require("common/js/main");
import "common/js/lib/thirdlib/Ice";
import { XYClient } from "common/js/lib/main";

// Creating an instance
const instance = XYClient.DispatcherClient.getInstance();

var options = {
  ip: "172.20.1.32",
  port: "7443",
  businesPort: "60002",
  userName: "2003",
  password: "123456",
  userType: "2",
};
instance.regist(options);

instance.registStateChange.on((param) => {
  console.log(param);

  // var state = para.state;
  // var stateStr;
  // switch (state) {
  //   case 1:
  //     stateStr = "registed";
  //     break;
  //   case 2:
  //     stateStr = "unregisted";
  //     break;
  //   case 3:
  //     stateStr = "connect error";
  //     break;
  //   case 4:
  //     stateStr = "password error";
  //     break;
  //   case 5:
  //     stateStr = "user not exist";
  //     break;
  //   case 6:
  //     stateStr = "server error";
  //     break;
  //   case 7:
  //     stateStr = "other error";
  //     break;
  //   case 8:
  //     stateStr = "repeat login";
  //     break;
  //   case 9:
  //     stateStr = "type error";
  //     break;
  //   default:
  //     break;
  // }
  // mylog("onRegitStateChange: " + stateStr);
});

export default XYClient;
