import React from 'react'

 const RepoItem = ({repo}) => {
    
       

    return (
        <div className="card">
            
            <h3>
                <a href={repo.html}></a>
            
            </h3>

        </div>
    )
}



export default RepoItem;