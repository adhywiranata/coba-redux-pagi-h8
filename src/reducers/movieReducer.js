const initialState = [];

const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_MOVIES_SUCCESS': {
      const movies = action.payload.map(movie => {
        return {
          movieId: movie.episode_id,
          title: movie.title,
          description: movie.opening_crawl,
        }
      });
      const newState = movies;
      return newState;
    }
    case 'ADD_MOVIE': {
      const newId = state[state.length - 1].movieId + 1;
      const newMovies = {...action.payload, movieId: newId};
      const newState = [...state, newMovies];
      return newState;
    };
    case 'DELETE_MOVIE': {
      const deletedId = action.payload;
      const newMovies = state.filter(movie => movie.movieId !== deletedId);
      return newMovies;
    }
    default: return state;
  }
};

export default movieReducer;
