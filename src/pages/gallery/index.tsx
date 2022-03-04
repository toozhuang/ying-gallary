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

const style = { background: 'inherit', padding: '8px 0', borderRadius: '20px' };

const GalleryList = () => {
  const { data, isLoading } = useGetGalleryQuery();

  if (isLoading) {
    return <div>loading </div>;
  }

  if (!data) {
    return <div>no data</div>;
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [fileContent, setFileContent] = useState('');

  const showModal = (e: IMovie) => {
    if (e) {
      const source = e.location + '/' + e.original_filename;
      console.log(source);
      // console.log(fileContent);
      // setFileContent(source);
    }

    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Row gutter={16}>
        {data.map((movie: IMovie) => {
          return (
            <Col className="gutter-row" style={style} key={movie.id} span={4}>
              <GalleryCard key={movie.id} movieDetail={movie} type={false} />
              {/*<Button onClick={() => showModal(movie)}>Test</Button>*/}
            </Col>
          );
        })}
      </Row>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={() => handleOk}
        onCancel={() => handleCancel}
      >
        {/*<video id="videoPlayer" width="100%" controls muted={false} autoPlay>*/}
        {/*  <source src={`http://localhost:8000/video?source=${fileContent}`} type="video/mp4" />*/}
        {/*</video>*/}
      </Modal>
    </div>
  );
};

export default GalleryList;
