import React,{Component} from "react";
import app from "./base";

import firebase from 'firebase';
import {Link} from 'react-router-dom';
import './home.css'
class Dashboard extends Component {

 
      
  render(){
  return (
    <div>
    <nav class="nav-extended sticky">
    <div class="nav-wrapper">
      <p class="brand-logo dash-text">Manager Portal</p>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><i class="fas fa-sign-out-alt logout" onClick={() => app.auth().signOut()}><span className="spanstyle">Logout</span></i>
        </li>
      </ul>
    </div>
    
    </nav>
    
    <div class="sidebar">
    <Link className="active" to={'/'}>Home</Link>
    <Link to={'AddEmployee'} >Add an Employee</Link>
    <Link to={'AddRetailer'}>Add Retailer</Link>
    <Link to={'TrackanEmployee'}>Track Employee</Link>
    <Link to={'AssignTask'}>Assign Task</Link>
    
  </div>
  </div>
    
  );
  }
};

export default Dashboard;
