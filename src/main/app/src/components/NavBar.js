import React from 'react';
import {getUserDetails } from './../actions/userActions'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class NavBar extends React.Component{

    componentWillMount()
    {
        this.props.getUserDetails();
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
                <Link to="/" className="navbar-brand"> Project Task Tool </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {!this.props.loggedIn && <Link to="/" className="nav-item nav-link">Login</Link>}
						<Link to="/register" className="nav-item nav-link">Sign Up</Link>
						<Link to="/projectBoard" className="nav-item nav-link">DashBoard</Link>
						<Link to="/logout" className="nav-item nav-link">Logout</Link>

                    </div>
                </div>
            </nav>
        )
    }

}

const mapStatetoProps = (state) =>(
    {
        loggedIn:state.user.loggedIn
    })

export default connect(mapStatetoProps,{getUserDetails})(NavBar);
