import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar'
import Users from './users/Users';
import axios from 'axios';
import Search from './users/Search';
import Alert from './layout/Alert';
import About from './Pages/About';
import User from './users/User';

class App extends Component{

  state = {

    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: []
  }


  clearUsers = () => {

    this.setState({users: [],loading:false});

  }

    setAlert = (msg,type) =>{

        this.setState({alert:{ msg,type}})
        setTimeout(()=>this.setState({alert: null}),3000);

    }

  searchUsers = async (text) => {
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items,loading:false});
  }
  
    //get singlie github user
    getUser = async (username) => { 

     
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({user: res.data });
    }

      //get user repo
      getUserRepos = async (username) => { 

     
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({: res.data });
      }

  render(){
  
      const {users,user,loading} = this.state;

    return (

      <Router>
      <div className="App">
        <Navbar title="Github Finder" icon="fa fa-github"/>
        
        <Switch>
        <Route exact path='/' render={  props => (
                  <Fragment>
                  <Alert alert={this.state.alert}/>
                  <Search searchUser={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} setAlert={this.setAlert}/>
                  <div className="container"> <Users loading={loading} users={users}/></div>
                  </Fragment>
              )
        }/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/user/:login' render={props => (

            
            <User  {...props} getUser={this.getUser} user={user} loading={loading} />
          
        )}/>
        </Switch>
      </div>
      </Router>
    );
  }

  }


export default App;

 