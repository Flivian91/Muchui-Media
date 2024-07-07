import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import postReducer from './slices/postSlice';
// import other reducers here

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    // add other reducers here
  },
});


