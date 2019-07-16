import React, {Component} from 'react';

function NavBar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
         <a className="navbar-brand" href="/"> Project Task Tool </a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
         aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
         </button>
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="/">Login</a>
              <a className="nav-item nav-link" href="/register">Sign Up</a>
              <a className="nav-item nav-link" href="/projectBoard">DashBoard</a>
              <a className="nav-item nav-link" href="/logout">Logout</a>
            </div>
         </div>
 </nav>
  )
}

export default NavBar
