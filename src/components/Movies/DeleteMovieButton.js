import React from 'react';
import { connect } from 'react-redux';

import { deleteMovieById } from '../../actions';

const buttonStyle = {background: 'red', cursor: 'pointer', outline: 'none', color: 'white', border: 0, borderRadius: 10};

const DeleteMovieButton = (props) => (
  <button
    onClick={() => props.deleteMovieById(props.movieId) }
    style={buttonStyle}
  >
    X
  </button>
);

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovieById: (movieId) => dispatch(deleteMovieById(movieId)),
  };
};

export default connect(null, mapDispatchToProps)(DeleteMovieButton);
