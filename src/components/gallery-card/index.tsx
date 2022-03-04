/**
 * date: 2022-03-4, Fri, 18:59
 * author: TooZhun9
 * feature： 电影 post card
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { IMovie } from '../../store/services/dto/movie.interface';

export interface IGalleryCard {
  movieDetail: IMovie;
  type: boolean;
}

const GalleryCard = (props: IGalleryCard) => {
  const { movieDetail: movie } = props;
  return <div>{movie.title}</div>;
};

GalleryCard.propTypes = {
  movieDetail: PropTypes.any,
};

export default GalleryCard;
