import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    isAuthenticated: false,
    uid: null,
    username: "",
    email: null,
    allUsers: [],
    friends: [],
    notFriends: [],
  },
  reducers: {
    loginRequested: (store, action) => {
      store.isLoading = true;
    },
    loginFailed: (store, action) => {
      store.isLoading = false;
    },
    loginSuccessfull: (store, action) => {
      const { email, uid, username } = action.payload;
      store.email = email;
      store.uid = uid;
      store.username = username;
      store.isAuthenticated = true;
      store.isLoading = false;
    },
    addAllUsers: (store, action) => {
      store.allUsers = action.payload;
    },
    logout: (store, action) => {
      store.isAuthenticated = false;
      store.uid = null;
      store.username = null;
      store.allUsers = [];
    },
    // addFriends: (store, action) => {
    //   store.totalUsers = action.payload;
    // },
  },
});

export default userSlice.reducer;
export const {
  loginSuccessfull,
  loginRequested,
  loginFailed,
  addAllUsers,
  logout,
} = userSlice.actions;
