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
                                <h1 className="grey-text">LogIn</h1>
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
                                    <button className="log-btn btn-primary btn">LOG IN</button>
                                    <div >
                                        <a><p>Forgot Password</p></a>
                                        <NavLink to="/signup">
                                            <a><p> Create an account </p></a>
                                        </NavLink>
                                    </div>
                                </form>
                                <div className="row">
                                    <div>
                                        <div className="col-lg-6 col-xs-12">
                                            <a href="http://www.facebook.com" target="_blank" className="a1">
                                                <div id="facebook" className="button1">
                                                    Facebook
                                    <div className="cover facebook">
                                                        <li className="fa fa-facebook fa-2x" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 col-xs-12">
                                            <a href="http://www.gmail.com" target="_blank">
                                                <div id="google" className="button1">
                                                    Google+
                                    <div className="cover google">
                                                        <li className="fa fa-google-plus fa-2x" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <link
                                            href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext"
                                            rel="stylesheet"
                                            type="text/css" />
                                        <link
                                            href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
                                            rel="stylesheet" />
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