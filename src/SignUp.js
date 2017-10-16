import React, { Component } from 'react';
import logo from './logo.svg';
import './SignUp.css';


class SignUp extends Component {
  render() {
    return (
       <div className="body">

          <div className="container">
                <div className="panel panel-right">
                    <div className="panel-content">
                        <div className="form">
                        <h1>Create your account</h1>
                        <form>
                            <div className="group">      
                                <input type="text" required className="input" />
                                <span className="highlight" />
                                <label className="label">
                                    First Name
                                </label>
                            </div>
                            <div className="group">      
                                <input type="TEXT" required className="input" />
                                <span className="highlight" />
                                <label className="label">
                                    Last Name
                                </label>
                            </div>
                            <div className="group">      
                                <input type="email" required className="input" />
                                <span className="highlight" />
                                <label className="label">
                                    Email
                                </label>
                            </div>
                            <div className="group">      
                                <input type="password" required className="input" />
                                <span className="highlight" />
                                <label className="label">
                                    Password
                                </label>
                            </div>
                            <div className="group">      
                                <input type="password" required className="input" />
                                <span className="highlight" />
                                <label className="label">
                                    Confirm Password
                                </label>
                            </div>
                            <button className="log-btn">ADD PROFILE DETAILS</button>
                            <a><p>Forgot Password</p></a>
                            <a><p> Create an account </p></a>
                        </form>
                        <div class="row">
                          <div class="col-md-3 col-sm-3 col-xs-6"> 
                            <a href="http://www.facebook.com" target="_blank" class="btn btn-sm animated-button victoria-four">LOG IN WITH FACEBOOK</a> 
                          </div>
                          <div class="col-md-3 col-sm-3 col-xs-6"> 
                            <a href="http://www.gmail.com" target="_blank" class="btn btn-sm animated-button victoria-four">LOG IN WITH GOOGLE</a> 
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default SignUp;