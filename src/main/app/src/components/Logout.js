import React,{Component} from 'react';
import {connect} from 'react-redux'
import {logoutUser} from './../actions/userActions'

class Logout extends Component
{
  componentWillMount()
  {
      this.props.logoutUser();
  }

  render()
  {
      return(
          <div className="alert alert-info text-center" role="alert">
            {this.props.message}
          </div>   )

  }
  }

const mapStatetoProps=state=>({
  message:state.user.message
})

export default connect(mapStatetoProps,{logoutUser})(Logout)
