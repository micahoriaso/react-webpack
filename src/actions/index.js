import axios from "axios";

export const loadRepos = () => {
  return dispatch => {
    return axios
      .get(`http://api.github.com/users/micahoriaso/repos`)
      .then(response => {
        dispatch(loadReposSuccess(response.data));
      })
      .catch(error => {});
  };
};

export const loadReposSuccess = payload => ({
  type: "REPO_LOAD_SUCCESS",
  payload
});
