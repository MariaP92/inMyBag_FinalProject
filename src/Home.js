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

class Home extends Component {
    constructor(props) {
        super(props);
		this.state = {
			product: null
		}
    }
    render(){

	return(
        <div className="container-fluid">
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
            <div className="trapecio">
                    <section className="search-product margin-top-xl">
                        <h1 id="add-items-header" className="white-text"><span>You need your tech.&nbsp;</span>
                        <span>We get it.</span></h1>
                        <h2>InMyBag is super high-speed insurance because life doesn't wait</h2>
                        <div>
                             <Col sm={5} md={5} xs={5}>
									<FormControl componentClass="select" placeholder="select" onChange={e => {
										this.setState({
											product: e.target.value
										})
									}}>
										<option value="">Seleccione Producto</option>
										{Products.map((pro, index) => {
											return <option key={index} value={index}>{pro.name}</option>
										})}

									</FormControl>
								</Col>
                        </div>
                    </section>
            </div>
        </div>);
    }
}

export default Home;