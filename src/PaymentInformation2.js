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
      next: false
    };
  }
  render() {
    const BarProgress = () => {
      return (
        <signup-progress-bar stage="3" className="ng-isolate-scope">
          <h1 className="grey-text left">Payment Information</h1>
          <div className="signup-progress-wrap" aria-hidden="false">
            <div className="signup-progress-stage ng-binding">Step 4 of 4</div>
            <div className="signup-progress-bar">
              <div className="progress-item progress-item-complete">
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
    return (
      <div className="row col-md-8 col-md-offset-2 registeration pageaccount">
        <BarProgress />

        <form className="form">
          <div>
            <div>
              <cc-input classname="ng-isolate-scope">
                <div className="margin-top ng-valid ng-valid-maxlength ng-valid-pattern ng-dirty ng-valid-parse">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="cardname"
                      id="cardname"
                      placeholder="NAME ON CARD"
                      required
                    />
                  </div>
                  <div className="form__field">
                    <div id="ccInput">
                      <div className="ng-hide" aria-hidden="true">
                        <b className="ng-binding" />
                      </div>
                      <input
                        type="text"
                        name="CardNo"
                        placeholder="Card Number"
                        className="form-control"
                        required
                      />
                      <label className="floating-placeholder">
                        Card Number
                      </label>
                    </div>
                  </div>
                  <div className="form__field third">
                    <input
                      type="text"
                      name="SecurityNo"
                      placeholder="Security Code"
                      maxLength={4}
                      autoComplete="off"
                      className="form-control"
                      required
                    />
                    <label className="floating-placeholder">
                      Security Code
                    </label>
                  </div>
                  <div className="clear" />
                  <div className="form__field payment-input half">
                    <div className="payment-input-field">
                      <input
                        type="text"
                        name="ExpMonth"
                        maxLength={2}
                        placeholder="Expiry Month"
                        className="form-control"
                        required
                      />
                      <label className="floating-placeholder">
                        Expiry Month
                      </label>
                    </div>
                    <div className="payment-input-field">
                      <input
                        type="text"
                        name="ExpYear"
                        maxLength={2}
                        placeholder="Expiry Year"
                        className="form-control"
                        requiredx
                      />
                      <label className="floating-placeholder">
                        Expiry Year
                      </label>
                    </div>
                  </div>
                </div>
                <div className="clear" />
              </cc-input>
              <span className="bolder pri">
                Your payment will be processed via our secure payments provider
              </span>
            </div>
          </div>
          <div className="billing-schedule-wrap">
            <h3>Billing Schedule</h3>
            <div className="choosePaymentMethod">
              <label className="choosePaymentMethod-annual">
                <span className="billing-label">Annually</span>
                <span aria-hidden="false">
                  <div>
                    <b className="ng-binding">£93.40</b>
                    /year
                  </div>
                </span>
              </label>
              <label classname="choosePaymentMethod-annual">
                <span classname="billing-label">Monthly</span>
                <span aria-hidden="false">
                  <b className="ng-binding">£7.78</b>
                  /month
                </span>
              </label>
            </div>
            <div>
              <p aria-hidden="false">
                You will be charged <b className="ng-binding">£93.40</b> today
                and will be given the option to renew your policy on{" "}
                <b className="ng-binding">15/10/2018</b>.
              </p>
              <p aria-hidden="true" className="ng-hide">
                You will be charged <b className="ng-binding">£93.40</b> today
                and will be given the option to renew your policy on{" "}
                <b className="ng-binding">15/10/2018</b>.
              </p>
              <p aria-hidden="true" className="ng-hide">
                You will be charged <b className="ng-binding">£7.78</b> today
                and then on the{" "}
                <b className="ng-binding">
                  16th every month until October 2018
                </b>.
              </p>
              <p className="ng-binding ng-hide" aria-hidden="true">
                You will be charged <b className="ng-binding">£7.78</b> today
                and then on the 16th every month until
                <b className="ng-binding">October 2018</b>.
              </p>
              <input
                className="button button-full-width"
                type="submit"
                name="submit"
                value="Pay Now"
                aria-hidden="false"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PaymentInformation2;
