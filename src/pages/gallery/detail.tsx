/**
 * date: 2022-03-4, Fri, 22:24
 * author: TooZhun9
 * feature： Gallary movie Detail Page
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetGalleryItemQuery } from '../../store/services/gallery';
import { Spin } from 'antd';

const GalleryDetail = () => {
  const { movieId } = useParams();
  const { data, isLoading } = useGetGalleryItemQuery(movieId as string);
  // console.log(data);
  if (isLoading) {
    return <Spin size="large" />;
  } else {
    return <div>{data?.title}</div>;
  }
};

GalleryDetail.displayName = 'Gallery detail Component';

export default GalleryDetail;
