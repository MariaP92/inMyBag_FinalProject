import React, { Component } from 'react';
import logo from './logo.svg';
import './LogIn.css';

class formLogIn extends Component {
  render() {
    return (
       <div className="body">
            <div className="container">
                <div className="panel panel-right">
                    <div className="panel-content">
                        <div className="form">
                        <h1>LogIn</h1>
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
                    </div>
                </div>
            </div>
            <div className="menu" />
            </div>
        </div>
    );
  }
}

export default App;