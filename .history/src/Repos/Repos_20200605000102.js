import React from 'react'
import Re

const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem repo={repo} />);
}


export default Repos;