import React from 'react';
import { connect } from 'react-redux';

import { addMovieActionCreator } from '../../actions';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    }
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            const newMovie = this.state;
            this.props.addMovie(newMovie);
          }
        }>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
            placeholder="movie title..."
          />
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange.bind(this)}
            placeholder="movie description..."
          />
          <input type="submit" value="add movie" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (movie) => dispatch(addMovieActionCreator(movie))
  }
}
export default connect(null,mapDispatchToProps)(AddForm);
