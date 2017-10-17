import React, {Component} from 'react';
import './Home.css';
import Products from './Products.js'
import {NavLink} from 'react-router-dom'
import { Form, FormGroup, FormControl, Col, Grid, Row, ControlLabel, Button, Radio } from 'react-bootstrap';

class Header extends Component {
    render(){
        return(  
            <div className="header">
                <div className="branding col-lg-1 col-md-1 col-xs-1">
                    <img className="img-responsive logo"src="https://inmybag.co/images/branding/logo-transparent-white.svg"/>
                </div>
                <div className="header-nav-menu col-lg-9 col-md-9 col-xs-9">
                <div className=" col-lg-8 col-md-8 col-xs-8 ">
                        <ul>
                        <li><NavLink exact to="/howitwork">How it works</NavLink></li>
                        <li><NavLink exact to="/blog">BLog</NavLink></li>
                        <li><NavLink exact to="/login">Log In</NavLink></li>
                        <li><NavLink exact to="/signup">Sign Up</NavLink></li>
                        </ul>
                </div>
                <div className=" col-lg-2 col-md-2 col-xs-2 ">
                    <ul>
                        <li><NavLink exact to="/bag">Bag({0})</NavLink></li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}

export default Header;