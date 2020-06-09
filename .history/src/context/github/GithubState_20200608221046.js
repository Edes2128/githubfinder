import React ,{useReducer} from 'react';
import axios from 'axios';
import  GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS,SET_LOADING,CLEAR_USERS,GET_REPOS,GET_USER} from '../types';


const GithubState = props => {

        const initialState = {

                users: [],
                user: {},
                repos: [],
                loading: false

        }

            const [state,dispatch] = useReducer(GithubReducer,initialState);

            //Search users

  const searchUsers = async (text) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);
  }
  

            //Get users

            //Get repos


            //Clear users

            //Set loading
                const setLoading = () =>

            return <GithubContext.Provider 
            value={{
                users: state.users,
                user: state.user ,
                repos: state.repos,
                loading: state.loading}} >  
            
            {props.children}

            
            </GithubContext.Provider>

}

export default GithubState;
