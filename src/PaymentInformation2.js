import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Header from "./Header";
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


class PaymentInformation2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namecard: null,
      numbercard: null,
      codecard: null,
      exmonth :null,
      exyear: null,
      showAnual: false,
      showMonthly: false,
      switch: false,
      showPay: false
    };
  }
  anualButton(e) {

    this.setState({
      showAnual: true,
      showMonthly: false,
      switch: true,

    });
  }
  monthlyButton(e) {

    this.setState({
      showMonthly: true,
      showAnual: false,
      switch: true,

    });
  }
  
  payMoney(e) {
    if (this.state.namecard == null || this.state.numbercard == null || this.state.codecard == null || this.state.exmonth == null || (this.state.exyear == null || this.state.switch === false)) {
      alert("Rellenar correctamente el formulario");
    } else {
      this.setState({ showPay: true });
    }

  }
  render() {
    const BarProgress = () => {
      return (
        <signup-progress-bar stage="3" className="ng-isolate-scope">
          <h1 className="grey-text left">Payment Information</h1>
          <div
            className="signup-progress-wrap"
            aria-hidden="false"
          >
            <div className="signup-progress-stage ng-binding">Step 4 of 4</div>
            <div className="signup-progress-bar">
              <div
                className="progress-item progress-item-complete"
              >
                <div className="progress-info">
                  <div className="progress-value" />
                </div>
              </div>
              <div
                className="progress-item "
              >
                <div className="progress-info">
                  <div className="progress-value" />
                </div>
              </div>
              <div
                className="progress-item "
              >
                <div className="progress-info">
                  <div className="progress-value" />
                </div>
              </div>
              <div
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
    return <div>
        <Header />
        <div className="row col-md-8 col-md-offset-2 registeration pageaccount">
          <BarProgress />
          <form className="form">
            <div>
              <div>
                <div className="form-group">
                  <input onChange={e => (this.state.namecard = e.target.value)} className="form-control" type="text" name="cardname" id="cardname" placeholder="NAME ON CARD" required />
                  <input onChange={e => (this.state.numbercard = e.target.value)} className="form-control" type="number" name="CardNo" placeholder="Card Number" autoComplete="off" aria-invalid="false" required />
                  <input onChange={e => (this.state.codecard = e.target.value)} className="form-control" type="number" name="SecurityNo" placeholder="Security Code" maxLength={4} autoComplete="off" aria-invalid="false" required />
                  <input onChange={e => (this.state.exmonth = e.target.value)} type="text" className="form-control" name="ExpMonth" maxLength={2} placeholder="Expiry Month" aria-invalid="false" required />
                  <input onChange={e => (this.state.exyear = e.target.value)} className="form-control" type="text" name="ExpYear" maxLength={2} placeholder="Expiry Year" aria-invalid="false" required />
                </div>
                <span className="a pri">
                  Your payment will be processed via our secure payments
                  provider
                </span>
              </div>
            </div>
            <div className="billing-schedule-wrap">
              <h3 >Billing Schedule</h3>
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
                {this.state.showPay && <div>
                    <h2 className="centered-text">
                      Payment made successfully!
                    </h2>
                    <br />
                    <br />
                    <br />
                  </div>}
                {this.state.switch && <input onClick={e => this.payMoney(e)} className="button button-full-width" type="input" name="submit" value="Pay Now" aria-hidden="false" />}
              </div>
            </div>
          </form>
        </div>
      </div>;

  }

}

export default PaymentInformation2;
