import React , {useContext} from 'react'
import AlertContext from '../context/alert/AlertContext';

const Alert = () => {

        const alertContext = useContext(AlertContext);

    return (
     
            alertContext.alerts !== null && (

                    <div className={`alert alert-${alerts.type}`}>
                    
                        <i className="fa fa-info-circle"></i> {.alerts.msg}

                    </div>

            )

    )
}

export default Alert;
