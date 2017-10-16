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
            <div className="container">
                <div className="panel panel-right">
                    <div className="panel-content">
                        <div className="form">
                        <h1>LogIn</h1>
                        <form>
                            <div className="group">      
                                <input type="text" required className="input" />
                                <span className="highlight" />
                                <label className="label">
                                    Your name
                                </label>
                            </div>
                            <div className="group">      
                                <input type="text" required className="input" />
                                <span className="highlight" />
                                <label>
                                    Your email
                                </label>
                            </div>
                            <a className="send-btn">Send</a>
                        </form>
                    </div>
                </div>
            </div>
            <div className="menu" />
            </div>
        </div>
    );
  }
}

export default LogIn;