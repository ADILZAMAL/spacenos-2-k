import { createSlice } from "@reduxjs/toolkit";

const friendSlice = createSlice({
  name: "friend",
  initialState: {
    isLoading: false,
    allFriends: [],
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
  },
});

export default friendSlice.reducer;
export const {
  addFriendRequested,
  addFriendSuccess,
  addFriendFailure,
  addAllFriends
} = friendSlice.actions;
