import React, { Fragment,Component } from 'react'
import PropTypes from 'prop-types';


class User extends Component {

    componentDidMount(){

            this.props.getUser(this.props.match.params.login);

    }

    static propTypes = {

            user: PropTypes.object.isRequired,
            getUser: PropTypes.func.isRequired,            
    }

    render(){

            const {name,avatar_url,location,bio,blog,login,html_url,followers,following,public_repos,public_gists,hireable} = this.props.user;
            
        return (
           <h1></h1>
        )
    }
}

export default User;

