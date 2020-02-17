import React,{Component} from 'react';
import './AddEmployee.css';
import Dashboard from './Dashboard';
import firebase from 'firebase';
class AddEmployee extends Component{

    constructor() {
        super();
        this.state = {
            firstName:'',
            lastName:'',
            Address:'',
            city:'',
            state:'',
            zip:'',
            phoneNo:'',
            email:'',
            MeetingMsg:'',
            lat:'',
            lang:''
        };
        
      }
    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    //   onLoad = (e) => {
    //     const db = firebase.firestore(); 
    //     const docRef = db.collection('EmployeeData').doc('vq6J19rzhi0HuTd1GBvF');
    
    //     docRef.get().then((doc) => {
    //       if (doc.exists) {
    //         console.log("Document data:", doc.data().firstName);
    //       } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //       }
    //       }).catch(function(error) {
    //         console.log("Error getting document:", error);
    //       });
    //   }
    addUser = e =>
    {
       e.preventDefault();
       console.log(this.state);
       const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection('EmployeeData').add({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            Address:this.state.Address,
            city:this.state.city,
            state:this.state.state,
            zip:this.state.zip,
            phoneNo:this.state.phoneNo,
            email:this.state.email,
            MeetingMsg:this.state.MeetingMsg,
            lat:this.state.lat,
            lang:this.state.lang
        });  
        this.setState({
            firstName:'',
            lastName:'',
            Address:'',
            city:'',
            state:'',
            zip:'',
            phoneNo:'',
            email:'',
            MeetingMsg:'',
            lat:'',
            lang:''
        });
        document.getElementById("formDetail").reset();
    }
    render()
    {
        return(
            <div>
           
            <div class="container-Form">
            <div className="card cardstyle" >
            <h1 class="well form-heading">Add Employee Form</h1>
            <div class="col-lg-12 well">
            <div class="row">
                        <form id="formDetail" onSubmit={this.addUser}>
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-6 form-group">
                                        <label>First Name</label>
                                        <input type="text" name="firstName" placeholder="Enter First Name Here.." class="form-control" onChange={this.updateInput}/>
                                    </div>
                                    <div class="col-sm-6 form-group">
                                        <label>Last Name</label>
                                        <input type="text" name="lastName" placeholder="Enter Last Name Here.." class="form-control" onChange={this.updateInput}/>
                                    </div>
                                </div>					
                                <div class="form-group">
                                    <label>Address</label>
                                    <textarea name="Address" placeholder="Enter Address Here.." rows="3" class="form-control" onChange={this.updateInput}></textarea>
                                </div>	
                                <div class="row">
                                    <div class="col-sm-4 form-group">
                                        <label>City</label>
                                        <input type="text" name="city" placeholder="Enter City Name Here.." class="form-control" onChange={this.updateInput}/>
                                    </div>	
                                    <div class="col-sm-4 form-group">
                                        <label>State</label>
                                        <input type="text" name="state" placeholder="Enter State Name Here.." class="form-control" onChange={this.updateInput}/>
                                    </div>	
                                    <div class="col-sm-4 form-group">
                                        <label>Zip</label>
                                        <input type="text" name="zip" placeholder="Enter Zip Code Here.." class="form-control" onChange={this.updateInput}/>
                                    </div>		
                                </div>				
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input type="text" name="phoneNo" placeholder="Enter Phone Number Here.." class="form-control" onChange={this.updateInput}/>
                            </div>		
                            <div class="form-group">
                                <label>Email Address</label>
                                <input type="text" name="email" placeholder="Enter Email Address Here.." class="form-control" onChange={this.updateInput}/>
                            </div>	
                            
                            <button type="submit" class="btn btn-lg clr">Submit</button>					
                            </div>  
                        </form> 
                        </div>
            </div>
            </div>
            </div>
            <Dashboard/>
            
            </div>
        )
    }
}

export default AddEmployee;