import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProjectBoard from './components/ProjectBoard'
import NavBar from './components/NavBar'
import AddProjectTask from './ProjectTask/AddProjectTask'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import updateProjectTask from './ProjectTask/UpdateProjectTask'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor} from './store'

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/projectBoard/" component={ProjectBoard} />
          <Route path="/addProjectTask" component={AddProjectTask} />
          <Route exact path="/updateProjectTask/:pt_id" component={updateProjectTask} />
          <Route path="/logout" component={Logout} />
        </div>
      </Router>
      </PersistGate >
      </Provider>
  );
}

export default App;
