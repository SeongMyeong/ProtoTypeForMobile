import React from 'react';
import Slider from '../NetflixSlider';

const SilderList = (props) => {

  const movies = props.movies;

  return (
    <Slider>
      {movies.map(movie => (
        <Slider.Item movie={movie} key={movie.id}>
          item1
        </Slider.Item>
      ))}
    </Slider>
  );
};

export default SilderList;
