import request from "website/utils/request";

const userApi = {
  Login: "/user/login",
};

export function getUserInfo(parameter: object) {
  return request({
    url: userApi.Login,
    method: "post",
    data: parameter,
  });
}
