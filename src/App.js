import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';

import logo from './logo.svg';
import './App.css';

// ACTION CREATOR: tempat untuk mentrigger perubahan
const setTitleAction = (newTitle) => {
  return {
    type: 'SET_POST_TITLE',
    title: newTitle,
  };
};

const setDescription = (newDescription) => {
  return {
    type: 'SET_POST_DESCRIPTION',
    description: newDescription,
  };
};

// REDUCER: tempat untuk mengubah state
const postReducerInitialState = {
  title: 'Belajar Redux',
  description: 'ini adalah pertama kali saya belajar redux',
};

const postReducer = (state = postReducerInitialState, action) => {
  console.log(action.type);
  switch(action.type) {
    case 'SET_POST_TITLE': return { ...state, title: action.title };
    case 'SET_POST_DESCRIPTION': return { ...state, description: action.description };
    default: return state;
  }
};

const userReducer = () => {
  return {
    username: 'budi',
    email: 'sibudi@gmail.com',
  }
};

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
});

// STORE
const store = createStore(rootReducer);

// Tampilin state dari store
console.log(store.getState().post);
// console.log(store.getState().user);

// men-subscribe
store.subscribe(() => {
  console.log(store.getState().post);
});

// men-dispatch action
store.dispatch(setTitleAction('Belajar Redux 2'));
store.dispatch(setDescription('Belajar redux rupanya gampang lhoo~'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
