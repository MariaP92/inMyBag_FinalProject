
import React, {Component} from 'react';
import './Home.css';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
class Quiz extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        answers : [],
        count : 0,
        complete : false,

     };
   }

    compplete(){
        this.setState({
            compare: true
        })

   render() {
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
                        <li><NavLink exact to="/howitworking">How it works</NavLink></li>
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
                            <input className="main-item-search" type="text" placeholder="What would you like to protect?" ng-change="add.searchStringChange()" ng-model="add.searchString" aria-invalid="false"/>
                        </div>
                    </section>
                    {!this.state.comple&& 
                    <div>Holi</div>
                    }
            </div>}
        </div>);
        }
    }
}