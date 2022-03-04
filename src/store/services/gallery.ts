/**
 * date: 2022-03-4, Fri, 17:24
 * author: TooZhun9
 * feature： 获取 gallery 有关的 api
 * TODO: 定义 query 的 type build.query<ResultType,QueryArg>
 */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (build) => ({
    getGallery: build.query<any, void>({
      query: () => 'gallery/all',
    }),
  }),
});

export const { useGetGalleryQuery } = galleryApi;
