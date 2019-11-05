import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

   
  <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>



    );
}
export default App;