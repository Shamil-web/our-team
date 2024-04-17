import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice.ts";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
