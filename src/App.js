import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import AddEmployee from "./AddEmployee";
import AddRetailer from "./AddRetailer";
import TrackanEmployee from "./TrackanEmployee";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import AssignTask from "./AssignTask";
import NewTracker from "./newtracker";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/addemployee" component={AddEmployee}/>
          <Route exact path="/addretailer" component={AddRetailer}/>
          <Route exact path="/trackanemployee" component={TrackanEmployee}/>
          <Route exact path="/assigntask" component={AssignTask}/>
          <Route exact path="/newtracker" component={NewTracker}/>

        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
