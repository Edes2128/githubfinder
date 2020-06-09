import React, {Fragment,Component } from 'react'
import Spinner from '../layout/Spiner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class User extends Component {

    componentDidMount(){

            this.props.getUser(this.props.match.params.login);

    }

    static propTypes = {

            loading: PropTypes.bool,
            user: PropTypes.object.isRequired,
            getUser: PropTypes.func.isRequired,
            
    }

    render() {
            const {name,avatar_url,location,bio,blog,login,html_url,followers,following,public_repos,public_gists,hireable} = this.props.user;

            const {loading} = this.props;
        
            
        return (
            <Fragment>
            
                <Link to='/' className="btn btn-link"></Link>

            </Fragment>
        )
    }
}

export default User;

