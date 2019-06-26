import React,{Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addProjectTask} from './../actions/projectTaskActions'
import classnames from 'classnames'


class Login extends Component
{
  constructor()
  {
    super()
    this.state={
      username:"",
      password:"",
      submitted:false
    }
  }

  onChange= (event) =>
  {
    this.setState({submitted:false})
    this.setState(
      {
        [event.target.name]:event.target.value
      }
    )
  }

  onSubmit=(event) =>
  {
    event.preventDefault();
    this.setState({submitted:true})
    if(this.state.username!=="" && this.state.password!=="")
    console.log("yes")

  }


  render()
  {
      return(
      <div className="loginPage">
       <div className="container">
           <div className="row">
               <div className="col-md-8 m-auto">
                   <h4 className="display-4 text-center">Login</h4>
                   <form onSubmit={this.onSubmit}>
                       <div className="form-group">
                           <input type="Email"  className="form-control form-control-lg"  name="username" placeholder="Email" value={this.state.username}  onChange={this.onChange}/>
                       </div>
                       {this.state.submitted && !this.state.username && <div className="invalid-feedback">Username is required</div>}
                       <div className="form-group">
                           <input type="password"  className="form-control form-control-lg"  name="password" placeholder="Password" value={this.state.password}  onChange={this.onChange}/>
                       </div>
                       {this.state.submitted && !this.state.password &&  <div className="invalid-feedback">Password is required</div>}
                       <div className="form-group">
                       <input type="submit" className="btn btn-primary btn-block mt-4" />
                       </div>
                       <div className="form-group">
                        Not yet registered?
                        <Link to="/register" className="btn btn-light" id="autoSizingCheck2">
                            Register
                        </Link>
                        </div>
                   </form>
                </div>
           </div>
       </div>
   </div>
    )
  }
}

export default Login
