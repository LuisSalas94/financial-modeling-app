/* eslint-disable */
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import homeReducer from "./home/home";
import detailsReducer from "./details/details";

const rootReducer = combineReducers({ homeReducer, detailsReducer });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
