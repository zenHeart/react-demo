import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import JSXRouter from './jsx/router';
import ApisRouter from './apis/router';
import ConceptRouter from './concept/router';
import TheoryRouter from './theory/router';

let config = {
  children: {
    jsx: JSXRouter,
    apis: ApisRouter,
    concept: ConceptRouter,
    theory: TheoryRouter
  }
};

function App() {
  return (
    <div className="App">
      <Router>
        <Nav {...config}></Nav>
      </Router>
    </div>
  );
}

export default App;
