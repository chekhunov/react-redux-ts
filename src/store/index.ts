import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

//первый параметр reducer вторым middleware передается через функцию applyMyddleware
//в данном случае один мидл варе это thunk для ассинхронных вызовов
export const store = createStore(rootReducer, applyMiddleware(thunk))