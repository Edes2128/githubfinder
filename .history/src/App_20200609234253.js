import React from 'react';
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar'
import About from './Pages/About';
import User from './users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './Pages/Home';


const App = () => {
    return (

        <GithubState>
        <AlertState>
      <Router>
      <div className="App">
        <Navbar title="Github Finder" icon="fa fa-github"/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/user/:login' component={User}/>
        </Switch>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  }

export default App;
