import React, {Component} from 'react';
import './App.css';
import Home from './Home';
import DataUser from './DataUser';
import LogIn from './LogIn';
import PaymentInformation from './PaymentInformation';
import SignUp from './SignUp';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

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

				<Route  path="/inMyBag_FinalProject"
				       render={() => <Redirect to= {'/home'}/>}/>
				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route  path="/datauser" render={() => <DataUser model={model} />}/>
				<Route  path="/login" render={() => <LogIn model={model} />}/>
				<Route  path="/paymentinformation" render={() => <PaymentInformation model={model} />}/>
				<Route  path="/signup" render={() => <SignUp model={model} />}/>
				<Route component={Home}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;