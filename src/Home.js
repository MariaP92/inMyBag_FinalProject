import React, { Component } from 'react';
import './Home.css';
import Products from './Products.js'
import HeaderMain from './HeaderMain'

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
        this.productUser = [];

        this.state = {
            product: null,
            calculateInsurance: 0,
            complete: false
        }
    }
    changeValue(e) {
        let priceInsurance = Products[e.target.value].insurancePrice + this.state.calculateInsurance;
        this.setState({
            product: e.target.value,
            complete: true,
            calculateInsurance: priceInsurance
        })
        this.productUser.push(Products[e.target.value]);
        console.log(this.productUser);
    }

    render() {
        const InsuranceTotal = () => {
            return (
                <div className="containerTotal">
                    <div className="container-wrapper">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h4>TOTAL</h4>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h4>${this.state.calculateInsurance}</h4>
                        </div>
                    </div>
                </div>
            );
        }

        const getProductList = () => {
            return this.productUser.map((product, index) => {
                return (
                    <li>
                        <div className="divProduct productTitl text-center col-lg-4 col-md-4 col-xs-4">
                            <img className="img-responsive" src={product.image} />
                            <p>{product.name}</p>
                            <p>{product.brand}</p>
                            <p>${product.price}</p>
                        </div>
                    </li>
                );
            })
        }

        const ProductList = () => {
            return (
                <div className="product-list row">
                    <ul>{getProductList()}</ul>
                </div>
            );
        }


        return (

            <div className="container-fluid background">
                    <HeaderMain/>
                    <div className="col-lg-6 col-md-6 col-xs-6">
                        {this.state.complete && <div className="input-products">
                            <ProductList />
                            <div className="col-lg-12 col-md-12 col-xs-12">
                                <div className="col-lg-12 col-md-12 col-xs-12">
                                    <InsuranceTotal />
                                </div>
                                <div className="col-lg-12 col-md-12 col-xs-12">
                                    <button>Insurance Me</button>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                <div className="trapezium">
                    <section className="search-product margin-top-xl">
                        <h1 id="add-items-header" className="white-text">
                            <label>You need your tech.&nbsp;</label>
                            <label>We get it.</label></h1>
                        <h2 id="add-items-headerh2">InMyBag is super high-speed insurance because life doesn't wait</h2>
                        <div className="dropdown">
                            <Col sm={9} md={9} xs={9}>
                                <FormControl componentClass="select" placeholder="select" onChange={(e) => { this.changeValue(e) }}>
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