import {
  applyMiddleware,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import userReducer from "./user";
import friendReducer from './friend'
import { loginSuccessfull } from "./user";
import authMiddleware from "./authMiddleware";
const rootReducer = {
  user: userReducer,
  friend: friendReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), authMiddleware],
});

export default store;
