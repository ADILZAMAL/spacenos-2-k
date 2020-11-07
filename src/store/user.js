import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    uid: null,
    username: null,
    email: null,
  },
  reducers: {
    loginSuccessfull: (store, action) => {
      store.email = action.payload.email;
      store.uid = action.payload.uid;
      store.username = action.payload.username;
      store.isAuthenticated = true;
    },
  },
});

export default userSlice.reducer;
export const { loginSuccessfull } = userSlice.actions;
