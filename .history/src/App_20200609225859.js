import React,{useState, Fragment} from 'react';
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar'
import Users from './users/Users';
import Search from './users/Search';
import Alert from './layout/Alert';
import About from './Pages/About';
import User from './users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/'


const App = () => {

  const [alert,setAlert] = useState(null);

 
    return (

        <GithubState>
      <Router>
      <div className="App">
        <Navbar title="Github Finder" icon="fa fa-github"/>
        
        <Switch>
        <Route exact path='/' render={  props => (
                  <Fragment>
                  <Alert alert={alert}/>
                  <Search  setAlert={showAlert}/>
                  <div className="container"> <Users/></div>
                  </Fragment>
              )
        }/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/user/:login' component={User}/>
        </Switch>
      </div>
      </Router>
      </GithubState>
    );
  }

export default App;

