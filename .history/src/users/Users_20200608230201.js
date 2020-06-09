import React , {useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spiner';
import PropTypes from 'prop-types';
import GithubContext from '../context/github/githubContext';

const Users = ({users,loading}) =>  {

  const githubContext = useContext(GithubContext);
  const {users,loading }

    if(loading){

        return <Spinner/>

    }else {

        return (
            <div style={userStyle}>
                
              {users.map(user => (

                <UserItem key={user.id} user={user} />

              ))}
            </div>
        );
      }
}
Users.propType={

    users:PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired

}

const userStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap: '1rem'
}
export default Users;

