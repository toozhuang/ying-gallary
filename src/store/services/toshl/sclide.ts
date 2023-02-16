/**
 * date: 2023-02-14, Tue, 17:43
 * author: Wang
 * feature： toshl 相关的 api 的 redux 定义
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const BASE_URL = process.env.REACT_APP_API_BASE_URI;

console.log('process.env.REACT_APP_ENV', process.env.REACT_APP_API_BASE_URI);

export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  // if you type your function argument here
  async (userId: number) => {
    try {
      const response = await fetch(`${BASE_URL}/toshl`);
      // https://reqres.in/api/users/${userId}
      //  as Returned
      // return ((await response.json()) as any).data;
      return (await response.json()) as any;
    } catch (e) {
      console.log(e);
    }
    return null;
  },
);

interface UsersState {
  entities: [];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  entities: [],
  loading: 'idle',
} as UsersState;

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      // both `state` and `action` are now correctly typed
      // console.log('势必到这里来了', state, action);
      state.loading = 'pending';
      // based on the slice state and the `pending` action creator
    }),
      builder.addCase(fetchUserById.fulfilled, (state, action) => {
        console.log('势必到这里来了', state, action);
        // both `state` and `action` are now correctly typed
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        state.entities.push(action.payload);
        state.loading = 'idle';
        // based on the slice state and the `pending` action creator
      });
  },
});
