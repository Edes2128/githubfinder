import Ract ,{useReducer} from 'react';
import axios from 'axios';
import  GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS,SET_LOADING,CLEAR_USERS,GET_REPOS,GET_USER} from '../types';


const 