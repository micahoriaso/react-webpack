import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import repoReducer from "../reducers/repoReducer";

const middleware = [thunk];

let createStoreWithMiddleware;

createStoreWithMiddleware = compose(applyMiddleware(...middleware))(
  createStore
);

const store = createStoreWithMiddleware(repoReducer);

export default store;
