import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectTaskItem from './../ProjectTask/ProjectTaskItem'
import { connect } from 'react-redux'
import { getAllTasks } from './../actions/projectTaskActions'
import { validateUser,getUserDetails } from './../actions/userActions'
import PropTypes from "prop-types";

class ProjectBoard extends Component {


  componentWillMount()
  {
    if(this.props.loggedIn)
      this.props.getUserDetails();
  }

  componentDidMount() {
    console.log("in did")
    console.log(`in did: and user: ${this.props.user.id}`)
   this.props.getAllTasks(this.props.user.id);
 }


  render() {
    const { project_tasks } = this.props.tasks;
    {console.log(this.props.tasks);}
    let BoardContent;
    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];

    const BoardAlgorithm = project_tasks => {
      if(this.props.loggedIn==false)
      {
        return (
          <div className="alert alert-info text-center" role="alert">
            Please login to view the board
          </div>
        );
      }

      if (project_tasks.length < 1) {
        return (
          <div className="alert alert-info text-center" role="alert">
            No Project Tasks on this board
          </div>
        );
      } else {
        const all_tasks = project_tasks.map(project_task => (
          <ProjectTaskItem key={project_task.id} project_task={project_task} />
        ));

        for (let i = 0; i < all_tasks.length; i++) {
          if (all_tasks[i].props.project_task.status === "TO_DO") {
            todoItems.push(all_tasks[i]);
          }

          if (all_tasks[i].props.project_task.status === "IN_PROGRESS") {
            inProgressItems.push(all_tasks[i]);
          }

          if (all_tasks[i].props.project_task.status === "DONE") {
            doneItems.push(all_tasks[i]);
          }
        }

        return(
          <React.Fragment>
          {console.log(`authenicate: ${this.props.loggedIn}`)}
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card text-center mb-2">
                  <div className="card-header bg-secondary text-white">
                    <h3>TO DO</h3>
                  </div>
                </div>
                {todoItems}
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-2">
                  <div className="card-header bg-primary text-white">
                    <h3>In Progress</h3>
                  </div>
                </div>
                {inProgressItems}
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-2">
                  <div className="card-header bg-success text-white">
                    <h3>Done</h3>
                  </div>
                </div>
                {doneItems}
              </div>
            </div>
          </div>
          </React.Fragment>
        )
      }
    };

    BoardContent= BoardAlgorithm(project_tasks);

    {console.log(todoItems);}

    return (
      <div className="container">
        <Link to="/addProjectTask" className="btn btn-primary mb-3">
          <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
          {BoardContent}
      </div>

    );
  }
}

ProjectBoard.propTypes = {
  getAllTasks: PropTypes.func.isRequired,
  tasks: PropTypes.object.isRequired
};



const mapStatetoProps = (state) =>(
{
  tasks: state.project_tasks,
  user:state.user.user,
  loggedIn:state.user.loggedIn
})

export default connect(mapStatetoProps,{getAllTasks, getUserDetails})(ProjectBoard);
