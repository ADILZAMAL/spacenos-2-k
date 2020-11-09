import { createSlice } from "@reduxjs/toolkit";

const friendSlice = createSlice({
  name: "friend",
  initialState: {
    isLoading: false,
    allFriends: [],
    currentFriend: {},
    messages: [],
  },
  reducers: {
    addFriendRequested: (store, action) => {
      store.isLoading = true;
    },
    addFriendSuccess: (store, action) => {
      store.isLoading = false;
    },
    addAllFriends: (store, action) => {
      store.allFriends = action.payload;
    },
    addFriendFailure: (store, action) => {
      store.isLoading = false;
    },
    addActiveFriend: (store, action) => {
      store.currentFriend = action.payload;
    },
    addMessages: (store, action) => {
      store.messages = action.payload;
    },
    clearFriends: (store, action) => {
      store.messages = [];
      store.currentFriend = {};
      store.allFriends = [];
    },
  },
});

export default friendSlice.reducer;
export const {
  addFriendRequested,
  addFriendSuccess,
  addFriendFailure,
  addAllFriends,
  addActiveFriend,
  addMessages,
  clearFriends
} = friendSlice.actions;
