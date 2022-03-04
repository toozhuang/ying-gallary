/**
 * date: 2022-03-4, Fri, 11:39
 * author: TooZhun9
 * feature： Movie Gallery 列表页面
 */
import React from 'react';
import { useGetGalleryQuery } from '../../store/services/gallery';
import GalleryCard from '../../components/gallery-card';
import { IMovie } from '../../store/services/dto/movie.interface';
import { Button, Col, Modal, Row } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const style = { background: 'inherit', padding: '8px 0', borderRadius: '20px' };

const GalleryList = () => {
  const { data, isLoading } = useGetGalleryQuery();

  if (isLoading) {
    return <div>loading </div>;
  }

  if (!data) {
    return <div>no data</div>;
  }

  return (
    <div>
      <Row gutter={16}>
        {data.map((movie: IMovie) => {
          return (
            <Col className="gutter-row" style={style} key={movie.id} span={4}>
              <GalleryCard key={movie.id} movieDetail={movie} type={false} />
              <Button>
                <Link to={`/gallery/${movie.id}`}> 返回主页面</Link>
              </Button>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default GalleryList;
