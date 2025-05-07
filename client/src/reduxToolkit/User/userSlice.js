import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: null,
  user: null,
  userId: null,
  usersGoogle: null,
  userModificationResult: null,
  usernameSearchResult: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserSlice: (state, action) => {
      state.users = action.payload.users;
    },
    postUserSlice: (state, action) => {
      state.users = action.payload.users;
    },
    putUserSlice: (state, action) => {
      state.userId = action.payload.userId;
    },
    getUserByIdSlice: (state, action) => {
      state.user = action.payload.user;
    },
    getUserByUsernameSlice: (state, action) => {
      state.usernameSearchResult = action.payload;
    },
    deletedUserSlice: (state, action) => {
      state.users = action.payload.users;
    },
    postGoogleSlice: (state, action) => {
      state.usersGoogle = action.payload;
    },
    putPassRecoverySlice: (state, action) => {
      state.userModificationResult = action.payload;
    },
  },
});

export const {
  getUserSlice,
  postUserSlice,
  putUserSlice,
  getUserByIdSlice,
  deletedUserSlice,
  postGoogleSlice,
  putPassRecoverySlice,
  getUserByUsernameSlice
} = userSlice.actions;
export default userSlice.reducer;
