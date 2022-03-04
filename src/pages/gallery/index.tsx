/**
 * date: 2022-03-4, Fri, 11:39
 * author: TooZhun9
 * feature： Movie Gallery 列表页面
 */
import * as React from 'react';
import { useGetGalleryQuery } from '../../store/services/gallery';
import GalleryCard from '../../components/gallery-card';

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
      <GalleryCard movieDetail={data[0]} type={false} />
    </div>
  );
};

export default GalleryList;
