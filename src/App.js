import React from 'react';

import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import MovieList from './components/Movies';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <MovieList />
    <UserList />
  </div>
);

export default App;
