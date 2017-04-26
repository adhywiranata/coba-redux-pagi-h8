import React from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../../actions';
import MovieItem from './MovieItem';
import AddForm from './AddForm';

class MovieList extends React.Component {

  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    return (
      <div>
        <h1>Movie List</h1>
        {this.props.movies.length === 0 && <h2>Loading.....</h2>}
        <ul>
          { this.props.movies.map(movie => (
            <MovieItem key={movie.movieId} {...movie} />
          )) }
        </ul>
        <AddForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
