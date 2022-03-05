/**
 * date: 2022-03-4, Fri, 17:24
 * author: TooZhun9
 * feature： 获取 gallery 有关的 api
 * TODO: 定义 query 的 type build.query<ResultType,QueryArg>
 */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie } from './dto/movie.interface';

interface IMovieDB {
  createTime: string;
  version: number;
  database: IMovie[];
}

interface IMovieDBResponse {
  code: number;
  data?: IMovie;
}

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['Gallery'],
  endpoints: (build) => ({
    getGallery: build.query<IMovie[], void>({
      query: () => ({
        url: 'gallery/all',
      }),
      transformResponse: (response: IMovieDB) => {
        return response.database;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Gallery' as const, id })),
              { type: 'Gallery', id: 'LIST' },
            ]
          : [{ type: 'Gallery', id: 'LIST' }],
    }),
    getGalleryItem: build.query<IMovie | undefined, string>({
      query: (id) => `gallery/${id}`,
      transformResponse: (response: IMovieDBResponse) => {
        return response.data ? response.data : undefined;
      },
      providesTags: (result, error, id) => {
        return result ? [{ type: 'Gallery', id }] : [{ type: 'Gallery', id: 'GalleryItem' }];
      },
    }),
  }),
});

export const { useGetGalleryQuery, useGetGalleryItemQuery } = galleryApi;
