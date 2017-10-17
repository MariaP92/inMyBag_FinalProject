import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import './SignUp.css';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    NavLink
} from 'react-router-dom'


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.pass = undefined,
            this.passConfirm = undefined,
            this.state = {
                password: false
            }
    }

    inputPass(e) {
        console.log(e.target.value);
        this.pass = e.target.value;
        this.comparePassword();
    }

    inputPassConfirm(e) {
        console.log(e.target.value);
        this.passConfirm = e.target.value;
        this.comparePassword();
    }

    comparePassword() {
        if (this.pass === this.passConfirm) {
            this.setState({
                password: true
            });
        }
        else {
            this.setState({
                password: false
            });
        }
    }

    render() {
        const BarProgress = () => {
            return (

                <signup-progress-bar stage="2" className="ng-isolate-scope">
                    <h1 className="grey-text left">Create your account</h1>
                    <div className="signup-progress-wrap" ng-show="progress.show" aria-hidden="false">
                        <div className="signup-progress-stage ng-binding">Step 1 of 4</div>
                        <div className="signup-progress-bar">
                            <div ng-repeat="stage in progress.stages" className="progress-item progress-item-complete progress-item-active">
                                <div className="progress-info">
                                    <div className="progress-value"></div>
                                </div>
                            </div>
                            <div ng-repeat="stage in progress.stages" className="progress-item ">
                                <div className="progress-info">
                                    <div className="progress-value"></div>
                                </div>
                            </div>
                            <div ng-repeat="stage in progress.stages" className="progress-item ">
                                <div className="progress-info">
                                    <div className="progress-value"></div>
                                </div>
                            </div>
                            <div ng-repeat="stage in progress.stages" className="progress-item ">
                                <div className="progress-info">
                                    <div className="progress-value"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </signup-progress-bar>

            );
        }



        const ButtonsSocial = () => {
            return (
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
            );
        }

        return (
            <div className="body">
                <div className="row col-md-8 col-md-offset-2 registeration pageaccount">
                    <div className="registerInner">
                        <div className="col-md-6 signUp">
                            <div className="form">
                                <BarProgress />
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
                                        <input type="password" required className="input" alue={this.pass}
                                            onChange={(e) => { this.inputPass(e) }} />
                                        <span className="highlight" />
                                        <label className="label">
                                            Password
                                        </label>
                                    </div>
                                    <div className="group">
                                        <input type="password" required className="input" value={this.passConfirm}
                                            onChange={(e) => { this.inputPassConfirm(e) }} />
                                        <span className="highlight" />
                                        <label className="label">
                                            Confirm Password
                                         </label>
                                    </div>
                                    {this.state.password ?
                                        <NavLink to="/datauser">
                                            <button className="findAddress btn btn-primary">ADD PROFILE DETAILS</button>
                                        </NavLink>
                                        :
                                        <button className="findAddress btn btn-primary" disabled>ADD PROFILE DETAILS</button>
                                    }
                                </form>
                                <ButtonsSocial />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default SignUp;
