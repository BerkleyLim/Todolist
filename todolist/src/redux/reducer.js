import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import storage from "redux-persist/lib/storage/session";

import todoListReducer from "./action/todolist.js"


const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  whitelist: ["todoList"]
  // blacklist -> 그것만 제외합니다
};

export const rootReducer = combineReducers({
  todoList:todoListReducer,
});

export default persistReducer(persistConfig, rootReducer);