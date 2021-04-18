import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {reducer} from "./reducer";

const reducers = combineReducers({
    serialData: reducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export {store};
