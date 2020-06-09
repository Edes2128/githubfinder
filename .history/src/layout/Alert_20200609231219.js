import React , {useContext} from 'react'
import AlertContext from '../context/alert/AlertContext';

const Alert = () => {

        const alertContext = useContext(AlertContext);

        const {alerts}  = alertContext;

    return (
     
            alerts !== null && (

                    <div className={`alert alert-${alertContext.alerts.type}`}>
                    
                        <i className="fa fa-info-circle"></i> {alertContext.alerts.msg}

                    </div>

            )

    )
}

export default Alert;
