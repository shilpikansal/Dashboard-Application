import React,{Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {registerUser} from './../actions/userActions'
import classnames from 'classnames'


class Register extends Component
{
  constructor()
  {
    super()
    this.state={
      username:"",
      password:""}
    }


  onChange= (event) =>
  {
    this.setState(
      {
        [event.target.name]:event.target.value
      }
    )
  }

  onSubmit=(event)=>
  {
    event.preventDefault();
    const user={username:this.state.username,
                password:this.state.password}
    console.log(`user is: ${user}`)
    this.props.registerUser(user,this.props.history);
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
                       <input type="Email"  className={classnames("form-control form-control-lg", { "is-invalid": this.props.errors.username })}
                        name="username" placeholder="Enyter Email" value={this.state.username} onChange={this.onChange} />
                        {this.props.errors.username && (
                          <div className="invalid-feedback">{this.props.errors.username}</div>
                        )}
                       </div>
                       <div className="form-group">
                           <input type="password"  className={classnames("form-control form-control-lg", { "is-invalid": this.props.errors.password })}
                            name="password" placeholder="Enter password" value={this.state.password}  onChange={this.onChange}/>
                            {this.props.errors.password && (
                              <div className="invalid-feedback">{this.props.errors.password}</div>
                            )}
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

const mapStatetoProps=state=>({
  errors:state.errors
})

export default connect(mapStatetoProps,{registerUser})(Register)
