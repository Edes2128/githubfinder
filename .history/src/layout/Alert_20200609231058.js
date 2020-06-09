import React , {useContext} from 'react'
import AlertContext from '../context/alert/AlertContext';

const Alert = () => {

        const alertContext = useContext(AlertContext);

    return (
     
            alertContext.alerts !== null && (

                    <div className={`alert alert-${alertContext}`}>
                    
                        <i className="fa fa-info-circle"></i> {alertContext.alerts.msg}

                    </div>

            )

    )
}

export default Alert;
