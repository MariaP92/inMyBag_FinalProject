import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "./PaymentInformation.css";
import {
  BrowserRouter,  
  Route,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./PaymentInformation.css";

class PaymentInformation extends Component {
  constructor(props) {
    super(props);
    // this.date = moment().tz("Europe/London").format("YYYY-MM-DD");
    this.state = {
      check: false,
      startDate: moment(),
      next: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    const onInputChange = e => {
      this.setState({
        next: e.target.checked
      });
    };

    const BarProgress = () => {
      return (
        <signup-progress-bar stage="2" className="ng-isolate-scope">
          <h1 className="grey-text left">Payment Information</h1>
          <div
            className="signup-progress-wrap"
            ng-show="progress.show"
            aria-hidden="false"
          >
            <div className="signup-progress-stage ng-binding">Step 3 of 4</div>
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
                className="progress-item progress-item-active"
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
            </div>
          </div>
        </signup-progress-bar>
      );
    };
    const bottonContinue = () => {
      if (this.state.checked == true) {
        alert("marcado");
      } else {
        alert("no marcado");
      }
    };
    const inputChecked = e => {
      this.setState({
        check: true
      });
    };
    return (
      <div className="row col-md-8 col-md-offset-2 registeration pageaccount">
        <div className="registerInner">
          <BarProgress />
          <div className="form__field">
            <p>
              Please read these points carefully. In order to join us at
              InMyBag, you'll need to be able to confirm the following:
            </p>
            <ul className="ul__confirmation">
              <li>
                <span className="bolder">I'm a Peruvian resident</span>
              </li>
              <li>
                <span className="bolder">I'm aged 18 or over</span>
              </li>
              <li>
                <span className="bolder">
                  I have not had any insurance policy voided by the provider of
                  the policy
                </span>
              </li>
              <li>
                <span className="bolder">
                  I have no unspent criminal convictions
                </span>
                <a href="#" ng-click="confirm.readText =! confirm.readText">
                  Read more
                </a>
              </li>
              <li>
                <span className="bolder">
                  I have not have made a gadget insurance claim in the last 3
                  years
                </span>
              </li>
              <li>
                <span className="bolder">
                  I have proof of ownership for the devices I am covering
                </span>{" "}
                <a href="#">Read more</a>
              </li>
              <li>
                <span className="bolder">
                  My devices are less that 3 years old (5 years for laptops)
                </span>
              </li>
            </ul>

                <span>
                  <input
                    type="checkbox"
                    aria-invalid="false"
                    onChange={onInputChange}
                  />
                </span>
                <span className="bolder">
                  <label>
                    I confirm that the above statements are true and correct.
                  </label>
                </span>

            <form>
              <br />
              <p className="confirmation-note">
                <small>
                  <b>PLEASE NOTE:</b> There is a 14 day cooling off period after
                  you have bought a policy in which you can change your mind,
                  you will not be able to make a claim during this period.
                </small>
                <br />
                <br />
                <small>
                  This is an annual policy which can be paid in monthly
                  instalments or annually. You will be able to choose which on
                  the next page.
                </small>
                <br />
                <br />
                <small>
                  If you are unable to confirm and wish to become a member,
                  please contact us at help@inmybag.co
                </small>
              </p>
            </form>
            <div>
              <label
                id="dob-placeholder"
                className="floating-placeholder floating-placeholder-active floating-placeholder-blurred ng-binding"
              >
                Policy start date
              </label>
              <DatePicker
                className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </div>

            <div className="centered-text">
              {this.state.next ? 
                <NavLink
                  to={'/PaymentInformation2'}>
                  <button
                    className="centered-text button button-full-width ng-binding"
                    type="submit"
                  >
                    Continue
                  </button>
                </NavLink>
               : 
                <button className="centered-text button button-full-width ng-binding"
                  type="submit" disabled>
                  Continue
                </button>
              }
            </div>
          </div>
          {/* <NextPart/> */}
        </div>
      </div>
    );
  }
}
// onClick={this.state.check? alert('esta checked'): alert('no esta checked')

export default PaymentInformation;
