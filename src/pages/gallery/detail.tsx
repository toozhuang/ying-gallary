/**
 * date: 2022-03-4, Fri, 22:24
 * author: TooZhun9
 * feature： Gallary movie Detail Page
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetGalleryItemQuery } from '../../store/services/gallery';
import { Image, Spin } from 'antd';
import { IMovie } from '../../store/services/dto/movie.interface';

import './detail.scss';

const GalleryDetail = () => {
  const { movieId } = useParams();
  const { data, isLoading } = useGetGalleryItemQuery(movieId as string);
  if (isLoading) {
    return <Spin size="large" />;
  } else {
    return (
      <div>
        <div className="gallery-detail-fanart-container">
          <Image preview={false} src={(data as IMovie).fanart.thumb} />
          <div className="description-container">
            <div>{data?.title}</div>
          </div>
        </div>
      </div>
    );
  }
};

GalleryDetail.displayName = 'Gallery detail Component';

export default GalleryDetail;
