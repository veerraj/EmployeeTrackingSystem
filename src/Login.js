import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {Link} from 'react-router-dom';
import app from "./base.js";
import './auth.css';
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    
  <section class="login-block">
  
  <div class="container">
	<div class="row">
		<div class="col-md-4 login-sec">
		    <h2 class="text-center">Login</h2>
		    <form  onSubmit={handleLogin} class="login-form">
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
  <div class="copy-text">New User <i class="fa fa-heart"></i> <Link to={`signup`}>Register</Link></div>
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
  );
};

export default withRouter(Login);
