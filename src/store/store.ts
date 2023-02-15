/**
 * date: 2022-03-4, Fri, 16:59
 * author: TooZhun9
 * feature： 全局store，
 */
import { configureStore } from '@reduxjs/toolkit';

import { galleryApi } from './services/gallery';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { usersSlice } from './services/toshl/sclide';

export const initialState = {
  isLoading: false,
  otpVerified: true,
  otp: '',
  otpError: false,
  isLogged: false,
  errors: [],
  user: {},
};

export const createStore = () => {
  return configureStore({
    reducer: {
      [galleryApi.reducerPath]: galleryApi.reducer,
      [usersSlice.name]: usersSlice.reducer,
    },
    //   TODO: 理解 middleware 的作用
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(galleryApi.middleware),
  });
};

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
