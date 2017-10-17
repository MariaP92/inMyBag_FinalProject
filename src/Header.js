import React, {Component} from 'react';
import './Home.css';
import Products from './Products.js'
import {NavLink} from 'react-router-dom'
import { Form, FormGroup, FormControl, Col, Grid, Row, ControlLabel, Button, Radio } from 'react-bootstrap';

class Header extends Component {
    render(){
        return(  
            <div className="header">
                <nav className="navbar navbar-light bg-faded">
                    <div className="col-lg-1 col-md-1 col-xs-1">
                        <img className="navbar-brand"src="https://inmybag.co/images/branding/logo-fill.svg"/>
                    </div>
                    <div className="header-nav-menu-no col-lg-11 col-md-11 col-xs-11">
                        <div className=" col-lg-8 col-md-8 col-xs-8 ">
                            <ul className=" col-lg-12 col-md-12 col-xs-12 ">
                                <li className=" col-lg-3 col-md-3 col-xs-3 "><NavLink exact to="/howitworking">How it works</NavLink></li>
                                <li className=" col-lg-3 col-md-3 col-xs-3 "><NavLink exact to="/blog">BLog</NavLink></li>
                                <li className=" col-lg-3 col-md-3 col-xs-3 "><NavLink exact to="/login">Log In</NavLink></li>
                                <li className=" col-lg-3 col-md-3 col-xs-3 "><NavLink exact to="/signup">Sign Up</NavLink></li>
                            </ul>
                        </div>
                        <div className=" col-lg-2 col-md-2 col-xs-2 ">
                            <ul>
                                <li><NavLink exact to="/bag">Bag({0})</NavLink></li>
                            </ul>
                         </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;