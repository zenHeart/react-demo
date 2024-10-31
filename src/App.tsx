import { BrowserRouter as Router } from 'react-router-dom';
import { COMPONENTS,TAGS_COLOR } from './const'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
       <h1>test</h1>
       <Router>
         {/* @ts-ignore */}
        <Nav children={COMPONENTS} tagsColor={TAGS_COLOR}></Nav>
      </Router>
    </div>
  )
}

export default App
