import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import './App.css';

import Home from './Home';

const NotFound = (props) => {
	return (
		<div><h2> Error 404! </h2></div>
	);
}

const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (<BrowserRouter>
		<div>
			<Switch>
				<Route  path="/Lyft-app-react"
				       render={() => <Redirect to= {'/home'}/>}/>
				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route component={Home}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;