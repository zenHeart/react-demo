import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { COMPONENTS } from './const'
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav children={COMPONENTS}></Nav>
      </Router>
    </div>
  );
}

export default App;
