import React, { Component } from "react";
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
 // eslint-disable-next-line

class PaymentInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check : false,
      startDate :null,
    }
        this.handleChange = this.handleChange.bind(this);

}
changeCheck() {
  this.setState({
    check: true,
  } )
}
     handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    const bottonContinue = () => {
      
    if(this.state.checked == true) {
      alert('marcado')
    }else {
      alert('no marcado')
    }
   }
   const inputChecked = (e) => {
    this.setState( {
            check : true
          })
   }
    return <div className="body">
        <div className="form__field">
          <p>
            Please read these points carefully. In order to join us at
            InMyBag, you'll need to be able to confirm the following:
          </p>
          <ul className="ul__confirmation">
            <li>
              <span className="bolder">I'm a UK resident</span>
            </li>
            <li>
              <span className="bolder">I'm aged 18 or over</span>
            </li>
            <li>
              <span className="bolder">
                I have not had any insurance policy voided by the provider
                of the policy
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
              </span> <a href="#">Read more</a>
            </li>
            <li>
              <span className="bolder">
                My devices are less that 3 years old (5 years for laptops)
              </span>
            </li>
          </ul>
          <ul className="checkbox-list">
            <li>
              <span>
                <input type="checkbox" aria-invalid="false" onClick={this.state.check == true}  />
              </span>
              <span className="bolder">
                <label>
                  I confirm that the above statements are true and correct.
                </label>
              </span>
            </li>
          </ul>
          <br />
          <p className="confirmation-note">
            <small>
              <b>PLEASE NOTE:</b> There is a 14 day cooling off period after you have bought a policy in which you can change your mind, you will not be able to make a claim during this period.
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
          <div>
            <label id="dob-placeholder" className="floating-placeholder floating-placeholder-active floating-placeholder-blurred ng-binding" ng-bind="sd.label">
              Policy start date
            </label>
            <DatePicker className="form-control" selected={this.state.startDate} onChange={this.handleChange} />
          </div>

          <div className="centered-text">
            <button className="centered-text button button-full-width ng-binding" type="submit" >
              Continue</button> 
          </div>  
        </div>
        <NextPart/>
      </div>
  }
}
// onClick={this.state.check? alert('esta checked'): alert('no esta checked')

export default PaymentInformation;
