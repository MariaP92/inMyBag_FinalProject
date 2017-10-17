import React, {Component} from 'react';
import './Home.css';
import Products from './Products.js'
import Header from './Header'

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
            product: null,
            complete : false
		}
    }

    render(){

	return(
        <div className="container-fluid">
                    <Header/>
                    <div className="col-lg-6 col-md-6 col-xs-6">
                        {this.state.complete&&<div className="input-products">
                            holi
                            </div>
                        }
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
                                            product: e.target.value,
                                            complete: true
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