import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { COMPONENTS,TAGS_COLOR } from './const'
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav children={COMPONENTS} tagsColor={TAGS_COLOR}></Nav>
      </Router>
    </div>
  );
}

export default App;
