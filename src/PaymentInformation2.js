
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "./PaymentInformation.css";
// eslint-disable-next-line

class PaymentInformation2 extends Component {
  render() {
    return (
      <form className="form">
        <div className="payment-details">
          <cc-input className="ng-isolate-scope">
            <div
              className="margin-top ng-valid ng-valid-maxlength ng-valid-pattern ng-dirty ng-valid-parse"
              style={{}}
            >
              <div className="form__field">
                <input
                  name="NameOnCard"
                  type="text"
                  float-placeholder="ccInput"
                  placeholder="Name On Card"
                  className="ng-valid ng-isolate-scope ng-not-empty ng-dirty ng-valid-parse ng-touched"
                  aria-invalid="false"
                />
                <label className="floating-placeholder floating-placeholder-active floating-placeholder-blurred">
                  Name On Card
                </label>
              </div>
              <div className="form__field">
                <div id="ccInput">
                  <div
                    ng-show="vm.cardType"
                    className="ng-hide"
                    aria-hidden="true"
                  >
                    <b className="ng-binding" />
                  </div>
                  <input
                    type="text"
                    name="CardNo"
                    placeholder="Card Number"
                    float-placeholder="ccInput"
                    placeholder-errors="vm.formErrors"
                    ng-disabled="vm.disabled"
                    ng-change="vm.getCardType()"
                    autoComplete="off"
                    ng-model="vm.Card.CardNumber"
                    className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty"
                    aria-invalid="false"
                  />
                  <label className="floating-placeholder">Card Number</label>
                </div>
              </div>
              <div className="form__field third">
                <input
                  type="text"
                  placeholder="Security Code"
                  maxLength={4}
                  float-placeholder="ccInput"
                  placeholder-errors="vm.formErrors"
                  autoComplete="off"
                  className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
                  aria-invalid="false"
                />
                <label className="floating-placeholder">Security Code</label>
              </div>
              <div className="clear" />
              <div className="form__field payment-input half">
                <div className="payment-input-field">
                  <input
                    name="ExpMonth"
                    type="text"
                    maxLength={2}
                    ng-pattern="/^([0][0-9]|[1][0-2]|[1-9])$/"
                    placeholder="Expiry Month"
                    float-placeholder="ccInput"
                    placeholder-errors="vm.formErrors"
                    className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-pattern ng-valid-maxlength"
                    aria-invalid="false"
                  />
                  <label className="floating-placeholder">Expiry Month</label>
                </div>
                <div className="payment-input-field">
                  <input
                    name="ExpYear"
                    type="text"
                    ng-disabled="vm.disabled"
                    maxLength={2}
                    ng-pattern="/^(17|18|19|20|21|22|23|24|25|26|27)$/"
                    placeholder="Expiry Year"
                    float-placeholder="ccInput"
                    placeholder-errors="vm.formErrors"
                    className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-pattern ng-valid-maxlength"
                    aria-invalid="false"
                  />
                  <label className="floating-placeholder">Expiry Year</label>
                </div>
              </div>
            </div>
            <div className="clear" />
          </cc-input>
          <span className="bolder pri">
            Your payment will be processed via our secure payments provider
          </span>
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
                  <label classname="choosePaymentMethod-annual">
                    <span classname="billing-label">Monthly</span>
                    <span aria-hidden="false">
                      <b className="ng-binding">£7.78</b>
                      /month
                    </span>
                  </label>
                </div>
              </span>
            </label>
          </div>
          <div>
            <p aria-hidden="false">
              You will be charged <b className="ng-binding">£93.40</b> today and
              will be given the option to renew your policy on{" "}
              <b className="ng-binding">15/10/2018</b>.
            </p>
            <p aria-hidden="true" className="ng-hide">
              You will be charged <b className="ng-binding">£93.40</b> today and
              will be given the option to renew your policy on{" "}
              <b className="ng-binding">15/10/2018</b>.
            </p>
            <p aria-hidden="true" className="ng-hide">
              You will be charged <b className="ng-binding">£7.78</b> today and
              then on the{" "}
              <b className="ng-binding">16th every month until October 2018</b>.
            </p>
            <p className="ng-binding ng-hide" aria-hidden="true">
              You will be charged <b className="ng-binding">£7.78</b> today and
              then on the 16th every month until{" "}
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
    );
  }
}


export default PaymentInformation2;