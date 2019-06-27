import React,{Component} from 'react';
import { Link, Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {validateUser} from './../actions/userActions'
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
      {        this.props.validateUser(this.state.username,this.state.password);}

  }

  render()
  {
    if (this.state.submitted && this.props.loggedIn) {console.log("authentuicated");
    console.log(`in login, testing user, ${this.props.user.id}`)
     return <Redirect to='/projectBoard'/>;  }
    else {
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
                       {this.state.submitted && !this.state.username && <div>Username is required</div>}
                       <div className="form-group">
                           <input type="password"  className="form-control form-control-lg"  name="password" placeholder="Password" value={this.state.password}  onChange={this.onChange}/>
                       </div>
                       {this.state.submitted && !this.state.password &&  <div >Password is required</div>}
                       <div className="form-group">
                       <input type="submit" className="btn btn-primary btn-block mt-4" />
                       </div>
                       <div className="form-group">
                        Not yet registered?
                        <Link to="/register" className="btn btn-light" id="autoSizingCheck2">
                            Register
                        </Link>
                        </div>
                         {this.state.submitted && <p>{this.props.message}</p>}
                   </form>
                </div>
           </div>
       </div>
   </div>
    )

    }
  }
}

Login.propTypes={
  validateUser:PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

const mapStatetoProps = state =>({
  message:state.user.message,
  loggedIn:state.user.loggedIn,
  user:state.user.user
})


export default connect(mapStatetoProps,{validateUser})(Login)
