import React, { Component } from 'react'
import Spinner from '../layout/Spiner';
import PropTypes from 'prop-types';

class User extends Component {

    componentDidMount(){

            this.props.getUser(this.props.match.params.login);

    }

    static propTypes = {


            loading: PropTypes.bool,
            user: 

    }

    render() {
            const {name,avatar_url,location,bio,blog,login,html_url,followers,following,public_repos,public_gists,hireable} = this.props.user;

            const {loading} = this.props;
        
        return (
            <div>
                {name,location}
            </div>
        )
    }
}

export default User;

