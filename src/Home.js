import React,{Component} from "react";
import app from "./base";
import firebase from 'firebase';
import {Link} from 'react-router-dom';
import './home.css'
import Dashboard from "./Dashboard";
class Home extends Component {

 
   state = {
        employees:'',
        empid:'',
        retid:'',
        Retailers:''
    };
  

    ReadEmployeeData = e =>{
      const db = firebase.firestore();
      db.collection('EmployeeData')
                        .get()
                        .then(snapshot => {
                          const employees = []
                          const Id=[]
                         
                          snapshot.forEach( doc => {
                            const data = doc.data()
                            const id= doc.id;
                            employees.push(data);
                            Id.push(id);
                          })
                          this.setState({employees:employees,empid:Id})
                          
                        })

    }
    ReadRetailerData = e =>{
      const db = firebase.firestore();
      db.collection('RetailerData')
                        .get()
                        .then(snapshot => {
                          const Id=[]
                          const Retailers = []
                          snapshot.forEach( doc => {
                            const data = doc.data()
                            const id= doc.id;
                            Retailers.push(data);
                            Id.push(id);
                          })
                          this.setState({Retailers:Retailers,retid:Id})
            
                        })

    }
    
      
  render(){
  return (
   
  <div>
  <div class="row"> 
  <div className="col-md-2">
  
  </div>
  <div className="col-md-5 center-block text-center">
  <button onClick = {this.ReadEmployeeData} className="button waves-effect waves-light btn pink lighten-1 z-depth-0">View Employee List</button>
  {
    this.state.employees &&
    this.state.employees.map( (employee,key=key+1) =>{
      
      return(
        <div className="row">
      <div className="col-md-6"> <p className="text-dec">{employee.firstName} {employee.lastName}</p></div>
      <div className="col-md-6"><button onClick={this.componentDidMount= e =>{
        const db = firebase.firestore();
        db.collection('EmployeeData').doc(this.state.empid[key]).delete();
        {this.ReadEmployeeData()}
      }} 
      className="btn-margin btn-danger btn-sm" style={{cursor:'pointer'}}>Delete</button><Link to={'AddEmployee'} ><button id={this.state.empid[key]} className="btn-success btn-sm" style={{cursor:'pointer'}} >update</button></Link></div>
      </div>
        
      )
    })
  } 
  </div>
  <div className="col-md-5 center-block text-center">
  <button onClick = {this.ReadRetailerData} className="button waves-effect waves-light btn skyblue lighten-1 z-depth-0">View Retailer List</button>
  { 
    this.state.Retailers &&
    this.state.Retailers.map( (Retailer,key=key+1) =>{
      
      return(
      <div className="row">
      
      <div className="col-md-6"> <p className="text-dec"> {Retailer.firstName} {Retailer.lastName} </p></div>
      <div className="col-md-6"><button onClick={this.componentDidMount= e =>{
        const db = firebase.firestore();
        db.collection('RetailerData').doc(this.state.retid[key]).delete();
        {this.ReadRetailerData()}
      }} 
      className="btn-margin btn-danger btn-sm" style={{cursor:'pointer'}}>Delete</button><button id={this.state.retid[key]} className="btn-primary btn-sm" style={{cursor:'pointer'}}>Update</button></div>
      </div>
             
      )
    })
  }
  </div>
  </div>
  <Dashboard/>
  </div>
    
  );
  }
};

export default Home;
