import React , {useContext} from 'react'
import AlertContext from '../context/alert/AlertContext';

const Alert = () => {

        const alertContext = useContext(AlertContext)l

    return (
     
            alert !== null && (

                    <div className={`alert alert-${alert.type}`}>
                    
                        <i className="fa fa-info-circle"></i> {alert.msg}

                    </div>

            )

    )
}

export default Alert;
