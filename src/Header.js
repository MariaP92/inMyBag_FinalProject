import React, {Component} from 'react';
import './Home.css';
import Products from './Products.js'
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import { Form, FormGroup, FormControl, Col, Grid, Row, ControlLabel, Button, Radio } from 'react-bootstrap';

class Header extends Component {
    render(){
        return(  
        <div>
            <div className="branding col-lg-3 col-md-3 col-xs-3">
                <img className="img-responsive"src="https://inmybag.co/images/branding/logo-transparent-white.svg"/>
            </div>
            <div className="navbar transparent navbar-inverse navbar-static-top hr col-lg-9 col-md-9 col-xs-9">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse header-nav-menu col-lg-7 col-md-7 col-xs-7 ">
                        <ul className="nav navbar-nav mineul">
                        <li><NavLink exact to="/howitwork">How it works</NavLink></li>
                        <li><NavLink exact to="/blog">BLog</NavLink></li>
                        <li><NavLink exact to="/login">Log In</NavLink></li>
                        <li><NavLink exact to="/signup">Sign Up</NavLink></li>
                        <li><NavLink exact to="/bag">Bag({0})</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Header;