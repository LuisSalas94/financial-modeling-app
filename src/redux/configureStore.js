/* eslint-disable */
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import homeReducer from "./home/home";

const rootReducer = combineReducers({ homeReducer });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
