import React from 'react';
import Slider from '../NetflixSlider';

const SilderList = props => {
  const movies = props.movies;
  const silderTitle = props.title;

  return (
    <React.Fragment>
      <Slider silderTitle={silderTitle}>
        {movies.map(movie => (
          <Slider.Item movie={movie} key={movie.id}>
            item1
          </Slider.Item>
        ))}
      </Slider>
    </React.Fragment>
  );
};

export default SilderList;
