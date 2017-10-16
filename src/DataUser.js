import React, { Component } from 'react';
import logo from './logo.svg';
import './DataUser.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {
	BrowserRouter,
	Route,
	Switch,
    Redirect,
    NavLink
} from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css';

class DataUser extends Component {
  constructor(props) {
    super(props);
    this.date = 'YYYY-MM-DD';
    this.phoneNumber = undefined;
    this.occupation = undefined;
    this.state = {
      address: undefined,
      next: false,
      manualAdd: false,
      startDate: moment()
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  showManualAdd(e) {
    this.setState({
      manualAdd: true
    });
  }

  hideManualAdd(e) {
    this.setState({
      manualAdd: false
    });
  }

  render() {
    const onInputChange = (e) => {
      this.setState({
        next: true
      });
    }
    const FormAdd = () => {
      return (
        <div className="form-group">
          <label for="address" className="grey-text left">YOUR ADDRESS</label><br />
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <input className="form-control" type="text" name="postcode" id="address" placeholder="PostCode" required />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <button className="findAddress btn btn-primary">FIND ADDRESS</button>
            </div>
            <a className="manualAddress" onClick={this.showManualAdd()}>Enter address manually</a>
          </div>
        </div>
      );
    }
    const BarProgress = () => {
      return (

        <signup-progress-bar stage="2" className="ng-isolate-scope">
          <h1 className="grey-text left">Create your account</h1>
          <div className="signup-progress-wrap" ng-show="progress.show" aria-hidden="false">
            <div className="signup-progress-stage ng-binding">Step 2 of 4</div>
            <div className="signup-progress-bar">
              <div ng-repeat="stage in progress.stages" className="progress-item progress-item-complete">
                <div className="progress-info">
                  <div className="progress-value"></div>
                </div>
              </div>
              <div ng-repeat="stage in progress.stages" className="progress-item progress-item-active">
                <div className="progress-info">
                  <div className="progress-value"></div>
                </div>
              </div>
              <div ng-repeat="stage in progress.stages" className="progress-item ">
                <div className="progress-info">
                  <div className="progress-value"></div>
                </div>
              </div>
              <div ng-repeat="stage in progress.stages" className="progress-item ">
                <div className="progress-info">
                  <div className="progress-value"></div>
                </div>
              </div>
            </div>
          </div>
        </signup-progress-bar>

      );
    }
    return (
      <div className="row col-md-8 col-md-offset-2 registeration pageaccount">
        <div className="registerInner">
          <div className="col-md-6 signUp">
            <BarProgress />
            <hr />
            <form action="" method="post" >
              <div className="form-group">
                <label for="birthday" className="grey-text left">DATE OF BIRTH</label><br />
              </div>
              <DatePicker
                  className="form-control"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
                <div className="form-group">
                  <div></div>
                </div>
              <div className="form-group">
                <input className="form-control" type="tel" name="phoneNum" id="phoneNum" data-validation="number"
                  maxLength={9} placeholder="PHONE NUMBER" pattern=".{9,}"
                  title="9 números o menos"
                  required />
              </div>
              <div className="form-group">
                <input class="form-control" type="text" name="occupation" id="occupation" placeholder="OCCUPATION" required />
              </div>
              <div className="form-group">
                <label for="address" className="grey-text left">YOUR ADDRESS</label><br />
                <div className="row">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <input className="form-control" type="text" name="postcode" id="address" placeholder="PostCode" required />
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <button className="findAddress btn btn-primary">FIND ADDRESS</button>
                  </div>

                </div>
              </div>
              {this.state.manualAdd &&
                <form action="" method="post" >
                  <div className="form-group">
                    <input class="form-control" type="text" name="country" id="country" placeholder="Country" required />
                  </div>
                  <div className="form-group">
                    <input class="form-control" type="text" name="country" id="country" placeholder="Address line 1" required />
                  </div>
                  <div className="form-group">
                    <input class="form-control" type="text" name="country" id="country" placeholder="Address line 2" required />
                  </div>
                  <div className="form-group">
                    <input class="form-control" type="text" name="country" id="country" placeholder="City" required />
                  </div>
                  <div className="form-group">
                    <input class="form-control" type="text" name="country" id="country" placeholder="Postcode" required />
                  </div>
                  <a className="manualAddress" onClick={(e) => { this.hideManualAdd(e) }}>Address lookup</a>
                </form>
              }
              {!this.state.manualAdd &&
                <div>
                  <a className="manualAddress" onClick={(e) => { this.showManualAdd(e) }}>Enter address manually</a><br />
                </div>
              }
              <button type="submit" className="signbuttons btn btn-primary">ADD PROFILE DETAILS</button>
              <NavLink
              to="/paymentinformation">
                <button type="submit" className="signbuttons btn btn-primary">ADD PROFILE DETAILS</button>
              </NavLink >

            </form>
          </div>

        </div>

      </div>
    );
  }
}

export default DataUser;