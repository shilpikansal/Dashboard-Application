import React,{Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addProjectTask} from './../actions/projectTaskActions'
import classnames from 'classnames'


class Register extends Component
{
  constructor()
  {
    super()
    this.state={
      username:"",
      password:""
    }
  }

  onChange= (event) =>
  {
    this.setState(
      {
        [event.target.name]:event.target.value
      }
    )
  }


  render()
  {
      return(
      <div className="registerPage">
       <div className="container">
           <div className="row">
               <div className="col-md-8 m-auto">
                   <h4 className="display-4 text-center">Sign Up</h4>
                   <form onSubmit={this.onSubmit}>
                       <div className="form-group">
                           <input type="Email"  className="form-control form-control-lg"  name="username" placeholder="Enter email" value={this.state.username}  onChange={this.onChange}/>
                       </div>
                       <div className="form-group">
                           <input type="password"  className="form-control form-control-lg"  name="password" placeholder="Enter password" value={this.state.password}  onChange={this.onChange}/>
                       </div>
                       <input type="submit" className="btn btn-primary btn-block mt-4"/>
                   </form>
                </div>
           </div>
       </div>
   </div>
    )
  }
}

export default Register
