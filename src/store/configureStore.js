import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import { loginSuccessfull } from "./user";

const rootReducer = {
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
