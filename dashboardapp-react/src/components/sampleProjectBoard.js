import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectTaskItem from './../ProjectTask/ProjectTaskItem'
import { connect } from 'react-redux'
import { getAllTasks } from './../actions/projectTaskActions'
import PropTypes from "prop-types";

class ProjectBoard extends Component {
  componentDidMount() {
   this.props.getAllTasks();
 }
  render() {
    {console.log(this.props.tasks);}
    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];

    const segragateTasks=(project_tasks)=>
    {
      for(let i=0;i<project_tasks.length;i++)
        if(project_tasks[i].status==="TO_DO")
          todoItems.push(project_tasks[i])
        else if(project_tasks[i].status==="IN_PROGRESS")
          inProgressItems.push(project_tasks[i])
        else if(project_tasks[i].status==="DONE")
          doneItems.push(project_tasks[i])

    }

    segragateTasks(this.props.tasks)

    {console.log(todoItems);}

    return (
      <div className="container">
        <Link to="/addProjectTask" className="btn btn-primary mb-3">
          <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-secondary text-white">
                  <h3>TO DO</h3>
                </div>
              </div>
              <ProjectTaskItem />
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-primary text-white">
                  <h3>In Progress</h3>
                </div>
              </div>
              {
                //     <!-- SAMPLE PROJECT TASK STARTS HERE -->
                // <!-- SAMPLE PROJECT TASK ENDS HERE -->
              }
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-success text-white">
                  <h3>Done</h3>
                </div>
              </div>
              {
                //     <!-- SAMPLE PROJECT TASK STARTS HERE -->
                // <!-- SAMPLE PROJECT TASK ENDS HERE -->
              }
            </div>
          </div>
        </div>
        {
          //<!-- Backlog ENDS HERE -->
        }{" "}
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
  tasks: state.project_tasks
})

export default connect(mapStatetoProps,{getAllTasks})(ProjectBoard);
