import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const initialState = {
  userLogInReducer: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cartReducer: {
    cartProducts: localStorage.getItem("cartProducts")
      ? JSON.parse(localStorage.getItem("cartProducts"))
      : [],
    shipping: localStorage.getItem("shipping")
      ? JSON.parse(localStorage.getItem("shipping"))
      : [],
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
