import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import App_reducer from "./AppReducer/app_Reducer";
import Auth_reducer from "./AuthReducer/auth_Reducer";

const rootReducer = combineReducers({"AppReducer":App_reducer,"AuthReducer":Auth_reducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);