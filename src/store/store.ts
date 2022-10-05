import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import adviceReducer from "../reducers/adviceReducer";

const store = createStore(adviceReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
