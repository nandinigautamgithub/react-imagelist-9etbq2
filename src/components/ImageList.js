import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard.js';

const ImageList = props => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
