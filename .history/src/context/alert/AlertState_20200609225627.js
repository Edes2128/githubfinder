import React ,{useReducer} from 'react';
import axios from 'axios';
import  AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import {SET_ALERT,REMOVE_ALERT} from '../types';


const AlertState = props => {

        const initialState = null;

            const [state,dispatch] = useReducer(AlertReducer,initialState);

           

            return <AlertContext.Provider 
            value={{
                users: state.users,
                user: state.user ,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                clearUsers,
                getUser,
                getUserRepos}}>  
            
            {props.children}

            
            </GithubContext.Provider>
}

export default AlertState;
