import React from 'react';
import '../assets/styles/CarouselItem.css';

const CarouselItem = (props) => {
  const cover = props.photo.urls.regular;
  return (
  <div className="carousel-item col-sm-3">
    <a target='_blank' href={props.photo.urls.full}>
      <img className="carousel-item__img" src={props.photo.urls.thumb}   />
    </a>
  </div>
  );
}

export default CarouselItem;
