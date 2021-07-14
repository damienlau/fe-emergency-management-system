import request from "website/utils/request";

const containerApi = {
  Create: "/box/info/add",
  Delete: "/box/info/deleteBatch",
  Find: "/box/info/page/criteria",
  Update: "/box/info/update",
};

export function saveContainerInfo(parameter: object) {
  return request({
    url: containerApi.Create,
    method: "post",
    data: parameter,
  });
}

export function deleteContainerInfo(parameter: object) {
  return request({
    url: containerApi.Delete,
    method: "get",
    data: parameter,
  });
}

export function getContainerInfo(parameter: object) {
  return request({
    url: containerApi.Find,
    method: "get",
    data: parameter,
  });
}

export function setContainerInfo(parameter: object) {
  return request({
    url: containerApi.Update,
    method: "post",
    data: parameter,
  });
}
