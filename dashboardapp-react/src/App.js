import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProjectBoard from './components/ProjectBoard'
import NavBar from './components/NavBar'
import AddProjectTask from './ProjectTask/AddProjectTask'
import Login from './components/Login'
import Register from './components/Register'
import updateProjectTask from './ProjectTask/UpdateProjectTask'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/projectBoard" component={ProjectBoard} />
          <Route exact path="/addProjectTask" component={AddProjectTask} />
          <Route exact path="/updateProjectTask/:pt_id" component={updateProjectTask} />
        </div>
      </Router>
      </Provider>
  );
}

export default App;
