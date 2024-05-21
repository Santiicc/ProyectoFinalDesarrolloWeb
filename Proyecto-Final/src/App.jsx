import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from Profile;
import Home from './Pages/Home';
import Reviews from './Pages/Reviews';
import NewReleases from './Pages/NewReleases';
import Popular from './Pages/Popular';
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Profile/>
        <div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/reviews" exact component={Reviews}/>
            <Route path="/new-releases" exact component={NewReleases}/>
            <Route path="/popular" exact component={Popular}/>
          </Switch>
        </div>
      </div>
    </Router> 
  )
}


export default App
