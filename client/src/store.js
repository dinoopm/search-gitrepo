import { createStore, applyMiddleware, compose,combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import repositories from "./reducers/repositories";
import bookmarks from "./reducers/bookmark";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combineReducers({repositories, bookmarks}), 
						   composeEnhancers(applyMiddleware(logger, thunk)));
