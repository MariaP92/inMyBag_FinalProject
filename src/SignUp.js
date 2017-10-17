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
        this.state={
            password: false
        }
    }

    inputPass(e){
        console.log(e.target.value);
        this.pass = e.target.value;
        this.comparePassword();
    }

    inputPassConfirm(e){
        console.log(e.target.value);
        this.passConfirm = e.target.value;
        this.comparePassword();
    }

    comparePassword(){
        if(this.pass===this.passConfirm){
            this.setState({
                password:true
            });
        }
        else{
            this.setState({
                password:false
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
        return (
            <div>
                <Header />
           
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
                                        <input type="password" required className="input" value={this.pass}
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
            </div> </div>
        );
    }
}

export default SignUp;