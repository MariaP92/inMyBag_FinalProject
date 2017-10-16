import React, { Component } from 'react';
import './LogIn.css';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

class LogIn extends Component {
    render() {
      return (
         <div className="body">
            <div className="row col-md-8 col-md-offset-2 registeration pageaccount">
                <div className="registerInner">
                    <div className="col-md-6 signUp">
                          <div className="form">
                          <h1>LogIn</h1>
                          <form>
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
                              <button className="log-btn">LOG IN</button>
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
  
export default LogIn;