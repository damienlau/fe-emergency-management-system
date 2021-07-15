import { getUserInfo } from "website/api/user";

const state = () => ({
  avatar: "",
  jobTitle: "",
  name: "",
  roles: 0,
});
const getters = {};
const actions = {
  // 登录
  onLogin({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      getUserInfo(userInfo).then((response) => {
        commit("setName", response.data["userName"]);
        commit("setRoles", response.data["userType"]);
      });
    });
  },
};
const mutations = {
  setAvatar: (state, avatar) => {
    state.avatar = avatar;
  },
  setJobTitle: (state, jobTitle) => {
    state.jobTitle = jobTitle;
  },
  setName: (state, name) => {
    state.name = name;
  },
  setRoles: (state, roles) => {
    state.roles = roles;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
