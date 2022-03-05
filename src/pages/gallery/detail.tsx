/**
 * date: 2022-03-4, Fri, 22:24
 * author: TooZhun9
 * feature： Gallary movie Detail Page
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetGalleryItemQuery } from '../../store/services/gallery';
import { Button, Col, Image, Row, Spin } from 'antd';
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
            <Row>
              <Col span={6}>
                <div className="action-area">
                  <Button>Play</Button>
                  <Button>Mark as Watched</Button>
                </div>
              </Col>
              <Col span={18}>
                <div className="description-area">
                  <div className="title">{data?.title}</div>
                  <div>{data?.plot}</div>
                  <div>{data?.certification}</div>
                  <div>{data?.runtime}</div>
                  <div>{data?.genre.map((item) => item)}</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
};

GalleryDetail.displayName = 'Gallery detail Component';

export default GalleryDetail;
