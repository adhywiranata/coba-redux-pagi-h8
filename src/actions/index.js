export const addMovieActionCreator = (movie) => {
  return {
    type: 'ADD_MOVIE',
    payload: movie,
  };
};

export const deleteMovieById = (movieId) => {
  return {
    type: 'DELETE_MOVIE',
    payload: movieId,
  }
};

export const fetchMovies = () => {
  return (dispatch) =>
    fetch('http://swapi.co/api/films')
      .then(res => res.json())
      .then(data => dispatch(fetchMoviesSuccess(data.results)));
}

export const fetchMoviesSuccess = (movies) => {
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    payload: movies,
  }
};
