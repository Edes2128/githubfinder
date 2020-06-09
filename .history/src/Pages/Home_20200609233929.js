import React,{Fragment} from 'react'
import Search from '../users/Search';
import Users from '../users/Users';
import Alert from '../layout/Alert';


const Home = () => {
    return (
        <Fragment>
        <Alert />
        <Search />
        <div className="container"> <Users/></div>
        </Fragment>
    )
}


export default Home;