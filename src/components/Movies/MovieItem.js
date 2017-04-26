import React from 'react';

import DeleteMovieButton from './DeleteMovieButton';

const MovieItem = ({movieId, title}) => (
  <li>{movieId}. {title} <DeleteMovieButton movieId={movieId} /></li>
);

export default MovieItem;
