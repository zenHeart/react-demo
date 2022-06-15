import React from 'react';
import './App.less';

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
