import React, { Component } from "react";

import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
 // eslint-disable-next-line

const NextPart = ( ) => {
  return(
    <form className ="form" >
   <div className="payment-details">
          <cc-input
          className="ng-isolate-scope">
          <div

          className="margin-top ng-valid ng-valid-maxlength ng-valid-pattern ng-dirty ng-valid-parse"
          style={{}}>
                      <div className="form__field">
                        <input
          name="NameOnCard"
          type="text"
          ng-disabled="vm.disabled"
          float-placeholder="ccInput"
          placeholder-errors="vm.formErrors"
          placeholder="Name On Card"
          ng-model="vm.Card.Name"
          className="ng-valid ng-isolate-scope ng-not-empty ng-dirty ng-valid-parse ng-touched"
          aria-invalid="false"
          style={{}} />
          <label className="floating-placeholder floating-placeholder-active floating-placeholder-blurred">
          Name On Card
          </label>
                      </div>
                      <div className="form__field">
                        <div id="ccInput">
                          <div
          ng-show="vm.cardType"
          className="ng-hide"
          aria-hidden="true">
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
          aria-invalid="false" />
          <label className="floating-placeholder">
          Card Number
          </label>
                        </div>
                      </div>
                      <div className="form__field third">
                        <input
          name="SecurityNo"
          type="text"
          placeholder="Security Code"
          maxLength={4}
          float-placeholder="ccInput"
          placeholder-errors="vm.formErrors"
          ng-disabled="vm.disabled"
          autoComplete="off"
          ng-model="vm.Card.CVC"
          className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-maxlength"
          aria-invalid="false" />
          <label className="floating-placeholder">
          Security Code
          </label>
                      </div>
                      <div className="clear" />
                      <div className="form__field payment-input half">
                        <div className="payment-input-field">
                          <input
          name="ExpMonth"
          type="text"
          ng-disabled="vm.disabled"
          maxLength={2}
          ng-pattern="/^([0][0-9]|[1][0-2]|[1-9])$/"
          placeholder="Expiry Month"
          float-placeholder="ccInput"
          placeholder-errors="vm.formErrors"
          ng-model="vm.Card.ExpirationMonth"
          className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-pattern ng-valid-maxlength"
          aria-invalid="false" />
          <label className="floating-placeholder">
          Expiry Month
          </label>
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
          ng-model="vm.Card.ExpirationYear"
          className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty ng-valid-pattern ng-valid-maxlength"
          aria-invalid="false" />
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
      <div className="billing-schedule-wrap">
      <h3>Billing Schedule</h3>
      <div className="choosePaymentMethod">
        <label className="choosePaymentMethod-annual">
          <span className="billing-label">Annually
          </span>
          <span 
          ng-hide="payment.Dsk"
           aria-hidden="false" 
          >
          <b class="ng-binding"
          >£93.40
          </b>/year
          </span>
        </label>
        <label className="choosePaymentMethod-annual">
          <span className="billing-label">Monthly
          </span>
          <span 
          ng-hide="payment.Dsk"
           aria-hidden="false" 
          >
          <b class="ng-binding"
          >£7.78
          </b>/month
          </span>
        </label>
        </div>
        <div>
            <p  aria-hidden="false">You will be charged <b className="ng-binding">£93.40</b> today and will be given the option to renew your policy on <b className="ng-binding">15/10/2018</b>.</p>
            <p aria-hidden="true" className="ng-hide">You will be charged <b className="ng-binding">£93.40</b> today and will be given the option to renew your policy on <b className="ng-binding">15/10/2018</b>.</p>
            <p  aria-hidden="true" className="ng-hide">You will be charged <b className="ng-binding">£7.78</b> today and then on the <b className="ng-binding">16th every month until October 2018</b>.</p>
            <p  className="ng-binding ng-hide" aria-hidden="true">You will be charged <b className="ng-binding">£7.78</b> today and then on the 16th every month until <b className="ng-binding">October 2018</b>.</p>
            <input className="button button-full-width" type="submit" name="submit"value="Pay Now" aria-hidden="false"></input>
        </div>
      </div>
    </form>
    
  )
}

class FormLogIn extends Component {
  constructor(props) {
    super(props);
    // this.date = moment().tz("Europe/London").format("YYYY-MM-DD");
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

export default FormLogIn;
