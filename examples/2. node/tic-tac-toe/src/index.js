import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Square from './components/Square'

ReactDOM.render(
  <Square onClick={() => {console.log('ha');}} value="demo"></Square>,
  document.getElementById('root')
);
