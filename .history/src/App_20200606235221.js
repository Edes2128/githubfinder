import React,{useState, Fragment} from 'react';
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar'
import Users from './users/Users';
import axios from 'axios';
import Search from './users/Search';
import Alert from './layout/Alert';
import About from './Pages/About';
import User from './users/User';

const App = () => {

  const [users,setUsers] = useState([]);
  const [user,setUser]  = useState({});
  const [loading,setLoading] = useState(false);
  const [alert,setsAlert] = useState(null);
  const [repos,setRepos] = useState([]);


  const clearUsers = () => {

    setUsers([]);
    setLoading(false);

  }

    const sAlert = (msg,type) =>{
        setsAlert({msg,type})
        setTimeout(()=>setAlert(null),3000)
    }


  const searchUsers = async (text) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);
  }
  
    //get singlie github user
    const getUser = async (username) => { 

     setLoading(true);
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      setUser(res.data);
      setLoading(false);
    }

      //get user repo
      const getUserRepos = async (username) => { 

     
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      setRepos(res.data)
      }

    return (

      <Router>
      <div className="App">
        <Navbar title="Github Finder" icon="fa fa-github"/>
        
        <Switch>
        <Route exact path='/' render={  props => (
                  <Fragment>
                  <Alert alert={alert}/>
                  <Search searchUser={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true : false} setAlert={setAlert}/>
                  <div className="container"> <Users loading={loading} users={users}/></div>
                  </Fragment>
              )
        }/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/user/:login' render={props => (

            
            <User  {...props} getUser={getUser} user={user} repos={repos}  getUserRepos={getUserRepos} />
          
        )}/>
        </Switch>
      </div>
      </Router>
    );
  }

export default App;

