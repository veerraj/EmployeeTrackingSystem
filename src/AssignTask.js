import React,{Component} from 'react';
import DateTimePicker from 'react-datetime-picker';
import Dashboard from './Dashboard'
import firebase from 'firebase';


class AssignTask extends Component{
 
    state = {
        employees:'',
        empid:'',
        retid:'',
        Retailers:'',
        selectValue1:'',
        name:'',
        textarea:'',
        date: new Date()
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
    componentDidMount = e =>{
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
    SendTask = e =>{
        e.preventDefault();
        const db = firebase.firestore();
        console.log(this.state.textarea)
        db.collection('EmployeeData').doc(this.state.selectValue1).update({
            MeetingMsg:'Your Meeting with '+this.state.name+' on '+this.state.date+' is sheduled and Message from manager '+this.state.textarea
        })
        
        document.getElementById("myform").reset();
    }
    handleDropdownChange1 = event =>{
        event.preventDefault();
        var index = event.target.selectedIndex;
        var optionElement = event.target.childNodes[index]
        this.setState({selectValue1:optionElement.getAttribute('data-id')})
        
      }
    handleDropdownChange2 = event =>{
        event.preventDefault();
        var index = event.target.selectedIndex;
        var optionElement = event.target.childNodes[index]
        this.setState({name:optionElement.text})
        console.log(this.state.name)
       }
       textMessage=e=>{
        e.preventDefault();
        this.setState({textarea:e.target.value})
       }

    
          onChange = date => this.setState({ date })

render()
{
    const mystyle={
        margin:'65px 0 0 0'
    }
    return(
        <div>
        <div class="container-fluid bg-light py-3">
    <div class="row">
        <div style={mystyle} class="col-md-6 mx-auto">
                <div class="card card-body">
                    <h3 class="text-center mb-4 form-heading">Assign Task</h3>
                    <form onSubmit={this.SendTask} id="myform">
                    <fieldset>
                    <select class="form-control marg-all-text-input" id="" onChange={this.handleDropdownChange1}>
                    <option value="" disabled selected hidden> Select Employee Name...</option>
                    {
                        this.state.employees &&
                        this.state.employees.map( (employee,key=key+1) =>{
                            return(
                                <option data-id={this.state.empid[key]} >{employee.firstName} {employee.lastName}</option>
                    
                            );
                        })
                    }
                    </select>
                    <select class="form-control marg-all-text-input" id="Dropdown" onChange={this.handleDropdownChange2} >
                    <option value="" disabled selected hidden> Select Retailer Name...</option>
                    {
                    
                        this.state.Retailers &&
                        this.state.Retailers.map(  (Retailer,key=key+1) =>{
                         return(
                            <option data-id={this.state.retid[key]}>{Retailer.firstName} {Retailer.lastName}</option>
                            
                         ); 
                        })
                    }
                    </select>
                                        
                    
                  
                        <div >
                            <DateTimePicker
                            onChange={this.onChange}
                            value={this.state.date}
                            />
                        </div>
                        <textarea onChange={this.textMessage} className="textarea-dec" rows="3" placeholder="Enter Complete Details of task">
                        
                        </textarea>
                        <button class="btn bg-color" type="submit">Assign Task</button>
                    </fieldset>
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
export default AssignTask;