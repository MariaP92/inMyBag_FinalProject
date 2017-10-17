import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "./PaymentInformation.css";
import "react-datepicker/dist/react-datepicker.css";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";

("use strict");

class PaymentInformation2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnual: false,
      showMonthly: false
    };
  }
  anualButton(e) {
    console.log('es', e)
    this.setState({
      showAnual: true, 
      showMonthly: false
    });
  }
  monthlyButton(e) {
    this.setState({
      showMonthly: true,
      showAnual: false
    });
  }
  render() {
    let buttonStyle = { 
      background: ' blue',
     }; 
    const BarProgress = () => {
      return (
        <signup-progress-bar stage="3" className="ng-isolate-scope">
          <h1 className="grey-text left">Payment Information</h1>
          <div
            className="signup-progress-wrap"
            ng-show="progress.show"
            aria-hidden="false"
          >
            <div className="signup-progress-stage ng-binding">Step 4 of 4</div>
            <div className="signup-progress-bar">
              <div
                ng-repeat="stage in progress.stages"
                className="progress-item progress-item-complete"
              >
                <div className="progress-info">
                  <div className="progress-value" />
                </div>
              </div>
              <div
                ng-repeat="stage in progress.stages"
                className="progress-item "
              >
                <div className="progress-info">
                  <div className="progress-value" />
                </div>
              </div>
              <div
                ng-repeat="stage in progress.stages"
                className="progress-item "
              >
                <div className="progress-info">
                  <div className="progress-value" />
                </div>
              </div>
              <div
                ng-repeat="stage in progress.stages"
                className="progress-item progress-item-active "
              >
                <div className="progress-info">
                  <div className="progress-value" />
                </div>
              </div>
            </div>
          </div>
        </signup-progress-bar>
      );
    };
    return <div className="row col-md-8 col-md-offset-2 registeration pageaccount">
        <BarProgress />

        <form className="form">
          <div>
            <div>
              <div className="margin-top ng-valid ng-valid-maxlength ng-valid-pattern ng-dirty ng-valid-parse">
                <div className="form-group">
                  <input yar type="text" name="cardname" id="cardname" placeholder="NAME ON CARD" required />
                  <input type="text" name="CardNo" placeholder="Card Number" autoComplete="off" className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty" aria-invalid="false" />
                  <input type="text" name="SecurityNo" placeholder="Security Code" maxLength={4} autoComplete="off" className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength" aria-invalid="false" />
                  <input type="text" name="ExpMonth" maxLength={2} placeholder="Expiry Month" className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-pattern ng-valid-maxlength" aria-invalid="false" />
                  <input type="text" name="ExpYear" maxLength={2} placeholder="Expiry Year" className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-pattern ng-valid-maxlength" aria-invalid="false" />
                </div>
              </div>
              <div className="clear" />
              <span className="bolder pri">
                Your payment will be processed via our secure payments
                provider
              </span>
            </div>
          </div>
          <div className="billing-schedule-wrap">
            <h3 className="centered-text">Billing Schedule</h3>
            <div className="choosePaymentMethod">
              <label onClick={e => {
                  this.anualButton(e);
                }} className="choosePaymentMethod-annual">
                <span className=" billing-label">ANNUALLY</span>
                <span aria-hidden="false">
                  <div>
                    <b className="ng-binding">£93.40</b>
                    /year
                  </div>
                </span>
              </label>
              <label onClick={e => this.monthlyButton(e)} classname=" choosePaymentMethod-annual">
                <span classname="billing-label">MONTHLY</span>
                <span aria-hidden="false">
                  <b className="ng-binding">£7.78</b>
                  /month
                </span>
              </label>
            </div>
            <div>
              {this.state.showAnual && <div>
                  <p aria-hidden="true" className="ng-hide">
                    You will be charged <b className="ng-binding">£93.40</b> today and will be given the option to renew your policy on
                    <b className="ng-binding">16/10/2018</b>.
                  </p>
                </div>}
              {this.state.showMonthly && <p aria-hidden="true" className="ng-hide">
                  You will be charged <b className="ng-binding">£7.78</b> today and then on the <b className="ng-binding">16th every month until October 2018</b>.
                </p>}

              <input className="button button-full-width" type="submit" name="submit" value="Pay Now" aria-hidden="false" />
            </div>
          </div>
        </form>
      </div>;
  }
}

export default PaymentInformation2;
