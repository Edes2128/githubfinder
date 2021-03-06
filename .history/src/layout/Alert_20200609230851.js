import React from 'react'
import AlertContext from ',,'

const Alert = () => {
    return (
     
            alert !== null && (

                    <div className={`alert alert-${alert.type}`}>
                    
                        <i className="fa fa-info-circle"></i> {alert.msg}

                    </div>

            )

    )
}

export default Alert;
