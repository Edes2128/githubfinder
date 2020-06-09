import React from 'react'


const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem repo={repo} />);
}


export default Repos;