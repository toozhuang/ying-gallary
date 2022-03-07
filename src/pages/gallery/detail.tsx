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
import ProfileCard from '../../components/profile-card';

const GalleryDetail = () => {
  const { movieId } = useParams();
  const { data, isLoading } = useGetGalleryItemQuery(movieId as string);
  if (isLoading) {
    return <Spin size="large" />;
  } else if (data) {
    const actors: any[] = data.actor.slice(0, 14);
    const crew: any[] = data.producer.slice(0, 3);
    const casterAndCrew = actors?.concat(crew);

    return (
      <div>
        <div className="gallery-detail-fanart-container">
          <Image style={{ width: '100%' }} preview={false} src={(data as IMovie).fanart.thumb} />
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
                  <div className="spec-container">
                    <div>{data?.ratings?.rating[0].value.toFixed(1)}</div>
                    <div>{timeConvert(data?.runtime)}</div>
                    <div>{data?.certification}</div>
                    <div>{data?.genre.map((item) => item)}</div>
                  </div>
                  <div className="plot">{data?.plot}</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="actors-container">
          {casterAndCrew.map((item, index) => {
            return <ProfileCard key={index} profile={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

function timeConvert(n: any) {
  const num = n;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours + ' hrs ' + rminutes + ' min';
}

GalleryDetail.displayName = 'Gallery detail Component';

export default GalleryDetail;
