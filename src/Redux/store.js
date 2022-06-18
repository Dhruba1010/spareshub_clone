import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/reducer";
import { productReducer } from "./Products/reducer";
import { authReducer } from './Authentication/reducer';


const rootReducer = combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer,
    authReducer: authReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));