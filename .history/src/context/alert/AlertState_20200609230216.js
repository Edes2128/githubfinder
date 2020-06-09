import React ,{useReducer} from 'react';
import axios from 'axios';
import  AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import {SET_ALERT,REMOVE_ALERT} from '../types';


const AlertState = props => {

        const initialState = null;

            const [state,dispatch] = useReducer(AlertReducer,initialState);

            //Set alert
            const setAlert = (msg,type) =>{
                
                    dispatch({

                        type: SET_ALERT,
                        payload: {msg,type}

                    });

                setTimeout(()=>setAlert(null),3000)
            }
        
           

            return <AlertContext.Provider 
            value={{alerts:state , setAlert}}>  
            
            {props.children}

            
            </AlertContext.Provider>
}

export default AlertState;
