export default function(state = { repoList: [] }, action) {
  switch (action.type) {
    case "REPO_LOAD_SUCCESS":
      return {
        ...state,
        repoList: action.payload
      };

    default:
      return state;
  }
}
