import React,{Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addProjectTask} from './../actions/projectTaskActions'
import { getUserDetails } from './../actions/userActions'
import classnames from 'classnames'


class AddProjectTask extends Component
{
  constructor()
  {
    super()
    this.state={
      summary:"",
      acceptanceCriteria:"",
      status:"Select Status",
      errors:{}
        }
  }

  componentWillMount()
  {
    if(this.props.loggedIn)
      this.props.getUserDetails();
  }

  onChange=(event) =>
  {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  onSubmit=(event) =>
  {
    event.preventDefault();
    const newProjectTask = {
        summary: this.state.summary,
        acceptanceCriteria: this.state.acceptanceCriteria,
        status: this.state.status,
        user:this.props.user
      };
      console.log(`user:${this.state.user}`)
     this.props.addProjectTask(newProjectTask, this.props.history);
  }
  render()
  {
    if(this.props.loggedIn===false)
    {
      return (
        <div>
          <div className="alert alert-info text-center" role="alert">
            Please login to add the task
          </div>
        </div>
      );
    }
    else {
      return(
      <div className="addProjectTask">
       <div className="container">
           <div className="row">
               <div className="col-md-8 m-auto">
                   <Link to="/projectBoard" className="btn btn-light">
                       Back to Board
                   </Link>
                   <h4 className="display-4 text-center">Add Project Task</h4>
                   <form onSubmit={this.onSubmit}>
                       <div className="form-group">
                           <input type="text"  className={classnames("form-control form-control-lg", { "is-invalid": this.props.errors.summary })}
                            name="summary" placeholder="Project Task summary" value={this.state.summary} onChange={this.onChange} />
                            {this.props.errors.summary && (
                              <div className="invalid-feedback">{this.props.errors.summary}</div>
                            )}
                       </div>
                       <div className="form-group">
                           <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria" value={this.state.acceptanceCriteria} onChange={this.onChange} ></textarea>
                       </div>
                       <div className="form-group">
                           <select className="form-control form-control-lg" name="status" onChange={this.onChange} >
                               <option value="">{this.state.status}</option>
                               <option value="TO_DO">TO DO</option>
                               <option value="IN_PROGRESS">IN PROGRESS</option>
                               <option value="DONE">DONE</option>
                           </select>
                       </div>
                       <input type="submit" className="btn btn-primary btn-block mt-4" />
                   </form>
               </div>
           </div>
       </div>
   </div>
    )

    }

  }
}

AddProjectTask.propTypes={
  addProjectTask:PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStatetoProps=state=>({
  errors:state.errors,
  loggedIn:state.user.loggedIn,
  user:state.user.user

})

export default connect(mapStatetoProps,{addProjectTask, getUserDetails})(AddProjectTask);
