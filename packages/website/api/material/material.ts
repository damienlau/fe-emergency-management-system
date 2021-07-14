import request from "website/utils/request";

const materialApi = {
  Create: "/material/info/add",
  Delete: "/material/info/deleteBatch",
  Find: "/material/info/page/criteria",
  Update: "/material/info/update",
};

export function saveMaterialInfo(parameter: object) {
  return request({
    url: materialApi.Create,
    method: "post",
    data: parameter,
  });
}

export function deleteMaterialInfo(parameter: object) {
  return request({
    url: materialApi.Delete,
    method: "get",
    data: parameter,
  });
}

export function getMaterialInfo(parameter: object) {
  return request({
    url: materialApi.Find,
    method: "get",
    data: parameter,
  });
}

export function setMaterialInfo(parameter: object) {
  return request({
    url: materialApi.Update,
    method: "post",
    data: parameter,
  });
}
