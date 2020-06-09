import React, { Fragment,Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
            <Fragment>
            
                <Link to="/" className="btn btn-light">
                Back to search
                </Link>

                    Hireable : {hireable ? <i className="fa fa-check text-success"></i>: <i className="fa fa-times-circle text-danger"></i> }

                    <div className="card grid-2">
                           <div className="all-center">
                           
                                <img src={avatar_url} className="round-img" alt={name} style={{width:'150px'}} />
                                <h1>{name}</h1>
                                <p>Location: {location}</p>
                           </div> 

                            <div>
                            
                                {bio && <Fragment><h3>Bio</h3><p>{bio}</p></Fragment>}
                                <a href={html_url} className=""></a>
                            </div>

                    </div>

            </Fragment>
        )
    }
}

export default User;

