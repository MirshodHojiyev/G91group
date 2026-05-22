import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import { userApi } from '../api/userApi';
import { setupListeners } from '@reduxjs/toolkit/query';
 const store =configureStore({
    reducer:{
      user:userReducer,
      [userApi.reducerPath]:userApi.reducer
    },
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
    
 })

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)

