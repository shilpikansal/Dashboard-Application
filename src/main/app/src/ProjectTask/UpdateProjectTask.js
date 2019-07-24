import React,{Component} from 'react';
import {getTaskDetails, addProjectTask} from './../actions/projectTaskActions'
import { getUserDetails } from './../actions/userActions'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import classnames from 'classnames'

class UpdateProjectTask extends Component
{
  constructor(){
    super();
    this.state={
      id:"",
      summary:"",
      acceptanceCriteria:"",
      status:"",
      errors:{}
    }

   this.onChange = this.onChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount()
  {
    if(this.props.loggedIn)
      this.props.getUserDetails();
  }

  componentDidMount() {
  const { pt_id } = this.props.match.params;
  this.props.getTaskDetails(pt_id)}

  componentWillReceiveProps(nextProps)
  {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    const { id, summary, acceptanceCriteria, status } = nextProps.task_details;

     this.setState({
       id,
       summary,
       acceptanceCriteria,
       status
     });
  }

  onChange=(event) =>
  {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const updatedTask = {
      id: this.state.id,
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status,
      user:this.props.user
    };

    this.props.addProjectTask(updatedTask, this.props.history);
  }


  render()
  {
    if(this.props.loggedIn===false)
    {
      return (
        <div>
          <div className="alert alert-info text-center" role="alert">
            Please login to update the task
          </div>
        </div>
      );
    }
    else {
      const {errors}=this.state;

      return(
        <div className="addProjectTask">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <Link to="/projectBoard" className="btn btn-light">
                  Back to Board
                </Link>
                <h4 className="display-4 text-center">
                  Add /Update Project Task
                </h4>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.summary
                      })}
                      name="summary"
                      placeholder="Project Task summary"
                      value={this.state.summary}
                      onChange={this.onChange}
                    />
                    {errors.summary && (
                      <div className="invalid-feedback">{errors.summary}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Acceptance Criteria"
                      name="acceptanceCriteria"
                      value={this.state.acceptanceCriteria}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      name="status"
                      value={this.state.status}
                      onChange={this.onChange}
                    >
                      <option value="">Select Status</option>
                      <option value="TO_DO">TO DO</option>
                      <option value="IN_PROGRESS">IN PROGRESS</option>
                      <option value="DONE">DONE</option>
                    </select>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      )

    }

  }
}

UpdateProjectTask.propTypes={
  getTaskDetails:PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  getProjectTask: PropTypes.func.isRequired,
  addProjectTask: PropTypes.func.isRequired}

const mapStatetoProps = state =>({
  task_details:state.project_tasks.project_task,
  user:state.user.user,
  loggedIn:state.user.loggedIn
})
export default connect(mapStatetoProps,{getTaskDetails, addProjectTask,getUserDetails})(UpdateProjectTask);
