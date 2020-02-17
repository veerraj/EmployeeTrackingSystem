import React, { useCallback } from "react";
import { withRouter } from "react-router";
import {Link} from 'react-router-dom';
import './auth.css';
import app from "./base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <section class="login-block">
  
  <div class="container">
	<div class="row">
		<div class="col-md-4 login-sec">
		    <h2 class="text-center">Register</h2>
		    <form  onSubmit={handleSignUp} class="login-form">
        <div class="form-group">
          <label htmlFor="email" for="exampleInputEmail1" class="text-uppercase">Email</label>
          <input type="email" id="email" class="form-control" placeholder=""/>
        </div>
        <div class="form-group">
          <label htmlFor="password" for="exampleInputPassword1" class="text-uppercase">Password</label>
          <input type="password" id="password" class="form-control" placeholder=""/>
        </div>
        <button type="submit" class="btn btn-login float-right">Submit</button>
        </form>
  <div class="copy-text">Already Registered <i class="fa fa-heart"></i> <Link to={`login`}>Login</Link></div>
  </div>
      <div class="col-md-8 banner-sec">
              
      <div class="carousel-item active">
        <img class="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide"/>
          <div class="banner-text">
          <h1 className="Heading">Manager Portal</h1>    
          </div>	
      
   	   
	</div>
	</div>
</div>
</div>
</section>
  )
};

export default withRouter(SignUp);
