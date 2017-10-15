import React, { Component } from 'react';
import './DataUser.css';


class DataUser extends Component {
    constructor(props) {
        super(props);
        this.date = moment().tz("Europe/London").format('YYYY-MM-DD');
        this.phoneNumber = undefined;
        this.occupation = undefined;
        this.state = {
            address: undefined,
            next: false
        }
    }

    render() {
        const onInputChange = (e) => {
            this.setState({
                next: true
            });
        }
        const InputData = () => {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <form id="registrationData">
                                <div className="form-group dataRegister">
                                    <i className="fa fa-user-circle-o col-xs-2" aria-hidden="true" />
                                    <div className="col-md-5 col-xs-5 dataInput">
                                        <label class="control-label col-sm-3" for="registration-date">DATE OF BIRTH</label>
                                        <div class="input-group registration-date-time">
                                            <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span></span>
                                            <input class="form-control" name="registration_date" id="registration-date" type="date"
                                            value={this.date} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
        const BarProgress = () => {
            return (
                <signup-progress-bar stage="2" class="ng-isolate-scope">
                    <div class="signup-progress-wrap" ng-show="progress.show" aria-hidden="false">
                        <div class="signup-progress-stage ng-binding">Step 2 of 4</div>
                        <div class="signup-progress-bar">
                            <div ng-repeat="stage in progress.stages" class="progress-item progress-item-complete">
                                <div class="progress-info">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                            <div ng-repeat="stage in progress.stages" class="progress-item progress-item-active">
                                <div class="progress-info">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                            <div ng-repeat="stage in progress.stages" class="progress-item ">
                                <div class="progress-info">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                            <div ng-repeat="stage in progress.stages" class="progress-item ">
                                <div class="progress-info">
                                    <div class="progress-value"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </signup-progress-bar>

            );
        }
        return (
            <div className="bag-split-content grey-bg ">
                <section className="pageaccount wrapper">
                    <h1 class="grey-text left">Create your account</h1>
                    <BarProgress />
                    <InputData />

                </section>
            </div>
        );
    }
}

export default DataUser;
/**
 *

    <div class="clear"></div>
                        <div class="hr-dark"></div>
                        <div class="two-thirds two-thirds-centered margin-top-xl">
                            <form role="form" name="signupAddInfoForm" id="signupAddInfoForm" method="post" accept-charset="UTF-8" class="ng-pristine ng-invalid ng-invalid-required ng-valid-pattern ng-valid-maxlength">
                                <div class="form__field"><select-date label="Date Of Birth" ng-model="sui.newCustomer.DateOfBirth" custom-validator="sui.customValidator" class="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty" aria-invalid="false" style=""><div class="form__field ng-pristine ng-invalid ng-invalid-required ng-valid-maxlength" ng-form="dobForm" name="dobForm" id="dobForm">
                                    <label id="dob-placeholder" class="floating-placeholder floating-placeholder-active floating-placeholder-blurred ng-binding" ng-bind="sd.label">Date Of Birth</label>
                                    <div class="date__picker">
                                        <div class="select date__picker__field floating-placeholder-input-margin">
                                            <input maxlength="2" name="day" id="dob-day" type="text" placeholder="DD" class="days-select floating ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-maxlength" ng-model="sd.defaultDay" required="" ng-change="sd.updateOutput(); sd.jumpToNext('day');" ng-focus="sd.activatePlaceholder();" ng-blur="sd.validateAll(true); sd.disablePlaceholder();" aria-invalid="true">
      </div>
                                            <div class="date__picker__divide floating-placeholder-input-margin">
                                                <span class="gray-color text-side-pad-l"> / </span>
                                            </div>
                                            <div class="select date__picker__field floating-placeholder-input-margin">
                                                <input maxlength="2" name="month" id="dob-month" type="text" placeholder="MM" class="month-select ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-maxlength" ng-model="sd.defaultMonth" required="" ng-change="sd.updateOutput(); sd.jumpToNext('month');" ng-focus="sd.activatePlaceholder();" ng-blur="sd.validateAll(true); sd.disablePlaceholder();" aria-invalid="true">
      </div>
                                                <div class="date__picker__divide floating-placeholder-input-margin">
                                                    <span class="gray-color text-side-pad-l"> / </span>
                                                </div>
                                                <div class="date__picker__field floating-placeholder-input-margin">
                                                    <input maxlength="4" type="text" id="dob-year" name="year" class="year-select date__picker__year ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-maxlength" placeholder="YYYY" required="" ng-model="sd.defaultYear" ng-change="sd.updateOutput();" ng-focus="sd.activatePlaceholder();" ng-blur="sd.validateAll(true); sd.disablePlaceholder();" aria-invalid="true">
      </div>
                                                </div>
                                            </div>
</select-date></div>
                                    <div class="form__field">
                                        <input type="text" name="PhoneNumber" id="PhoneNumber" placeholder="Phone number" float-placeholder="signupAddInfoForm" placeholder-errors="sui.formErrors" ng-pattern="/^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/" required="" ng-model="sui.newCustomer.PhoneNumber" class="ng-pristine ng-untouched ng-isolate-scope ng-empty ng-invalid ng-invalid-required ng-valid-pattern" aria-invalid="true"><label class="floating-placeholder">Phone number</label>
            </div>
                                        <!-- ngIf: sui.phoneOrEmail -->
            <div class="form__field">
                                            <input type="text" name="Occupation" id="Occupation" placeholder="Occupation" float-placeholder="signupAddInfoForm" placeholder-errors="sui.formErrors" ng-pattern="/^[a-zA-Z -]+$/" required="" ng-model="sui.newCustomer.Occupation" class="ng-pristine ng-untouched ng-isolate-scope ng-empty ng-invalid ng-invalid-required ng-valid-pattern" aria-invalid="true"><label class="floating-placeholder">Occupation</label>
            </div>
                                            <postcode label="signup" ng-model="sui.addressData" take-address="sui.takeAddress(sui.addressData)" class="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty" aria-invalid="false"><h3 class="text-top-pad grey-text">Your Address</h3>
                                                <div class="postcode-wrapper">
                                                    <div ng-hide="selectedaddress || address" ng-form="postcodeSearchForm" class="ng-pristine ng-valid" aria-hidden="false">
                                                        <div class="form__field form__field--less-margin">
                                                            <div class="form__field--two-items">
                                                                <input float-placeholder="postcodeSearchForm" placeholder-errors="$ctrl.formErrors" class="postcode input-two-thirds form__field--two-items__item ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty" type="text" name="postcode" id="postcode-enter" ng-model="$ctrl.postcode" placeholder="Postcode" aria-invalid="false"><label class="floating-placeholder">Postcode</label>
                                                                    <a class="button button--lookup input-third button--small form__field--two-items__item" href="" ng-click="$ctrl.lookup();">Find address</a>
			</div>
                                                            </div>
                                                            <div class="form__field form__field--less-margin ng-hide" ng-show="$ctrl.response.type === 'result'" aria-hidden="true">
                                                                <label>Pick an address</label>
                                                                <div class="select input-half">
                                                                    <select name="adressSelect" class="padded-input ng-pristine ng-untouched ng-valid ng-empty" ng-model="$ctrl.index" ng-options="$ctrl.response.data.indexOf(option) as option.line_1 for option in $ctrl.response.data" ng-click="$ctrl.chooseAddress($ctrl.index);" ng-change="$ctrl.chooseAddress($ctrl.index);" aria-invalid="false"><option value="?" selected="selected"></option></select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div ng-show="selectedaddress &amp;&amp; !address" aria-hidden="true" class="ng-hide">
                                                            <label class="floating-placeholder-static-blurred">Selected Address</label>
                                                            <div class="selected-address">
                                                                <span class="postcode-wrapper--marg postcode-wrapper--float-left ng-binding">, </span>
                                                                <a href="" ng-click="address=!address" class="postcode-wrapper--float-right">Update address</a>
                                                            </div>
                                                        </div>
                                                        <a href="" ng-hide="selectedaddress || address" ng-click="address=!address" class="postcode-wrapper--marg bolder" aria-hidden="false">Enter address manually</a>

                                                        <div ng-show="address" ng-form="postcodeFM" id="postcodeWrp" class="margin-top ng-pristine ng-invalid ng-invalid-required ng-hide" aria-hidden="true">
                                                            <div class="form__field">
                                                                <input float-placeholder="postcodeFM" placeholder-errors="$ctrl.formErrors" type="text" name="Country" id="Country" required="" ng-model="$ctrl.address.country" ng-change="$ctrl.chooseAddressManually($ctrl.address);" ng-click="$ctrl.chooseAddressManually($ctrl.address);" ng-focus="$ctrl.chooseAddressManually($ctrl.address);" placeholder="Country" class="ng-pristine ng-untouched ng-isolate-scope ng-empty ng-invalid ng-invalid-required" aria-invalid="true"><label class="floating-placeholder">Country</label>
                                                                    <div class="form__errors ng-hide" ng-show="postcodeFM.Country.$dirty &amp;&amp; postcodeFM.Country.$error.required" aria-hidden="true">
                                                                        <p>Country is required</p>
                                                                    </div>
		</div>
                                                                <div class="form__field">
                                                                    <input type="text" name="Addr1" id="Addr1" required="" ng-model="$ctrl.address.firstaddr" ng-change="$ctrl.chooseAddressManually($ctrl.address);" ng-click="$ctrl.chooseAddressManually($ctrl.address);" ng-focus="$ctrl.chooseAddressManually($ctrl.address);" float-placeholder="postcodeFM" placeholder-errors="$ctrl.formErrors" placeholder="Address line 1" class="ng-pristine ng-untouched ng-isolate-scope ng-empty ng-invalid ng-invalid-required" aria-invalid="true"><label class="floating-placeholder">Address line 1</label>
                                                                        <div class="form__errors ng-hide" ng-show="postcodeFM.Addr1.$dirty &amp;&amp; postcodeFM.Addr1.$error.required" aria-hidden="true">
                                                                            <p>First Address is required</p>
                                                                        </div>
		</div>
                                                                    <div class="form__field">
                                                                        <input type="text" name="Addr2" id="Addr2" ng-required="false" ng-model="$ctrl.address.line_3" ng-change="$ctrl.chooseAddressManually($ctrl.address);" ng-click="$ctrl.chooseAddressManually($ctrl.address);" ng-focus="$ctrl.chooseAddressManually($ctrl.address);" float-placeholder="postcodeFM" placeholder-errors="$ctrl.formErrors" placeholder="Address line 2" class="ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid ng-valid-required" aria-invalid="false"><label class="floating-placeholder">Address line 2</label>
		</div>
                                                                        <div class="form__field">
                                                                            <input type="text" name="City" id="City" required="" ng-model="$ctrl.address.district" ng-change="$ctrl.chooseAddressManually($ctrl.address);" ng-click="$ctrl.chooseAddressManually($ctrl.address);" ng-focus="$ctrl.chooseAddressManually($ctrl.address);" float-placeholder="postcodeFM" placeholder-errors="$ctrl.formErrors" placeholder="City" class="ng-pristine ng-untouched ng-isolate-scope ng-empty ng-invalid ng-invalid-required" aria-invalid="true"><label class="floating-placeholder">City</label>
                                                                                <div class="form__errors ng-hide" ng-show="postcodeFM.City.$dirty &amp;&amp; postcodeFM.City.$error.required" aria-hidden="true">
                                                                                    <p>City is required</p>
                                                                                </div>
		</div>
                                                                            <div class="form__field">
                                                                                <input type="text" name="County" id="County" required="" ng-model="$ctrl.address.county" ng-change="$ctrl.chooseAddressManually($ctrl.address);" ng-click="$ctrl.chooseAddressManually($ctrl.address);" ng-focus="$ctrl.chooseAddressManually($ctrl.address);" float-placeholder="postcodeFM" placeholder-errors="$ctrl.formErrors" placeholder="County" class="ng-pristine ng-untouched ng-isolate-scope ng-empty ng-invalid ng-invalid-required" aria-invalid="true"><label class="floating-placeholder">County</label>
                                                                                    <div class="form__errors ng-hide" ng-show="postcodeFM.County.$dirty &amp;&amp; postcodeFM.County.$error.required" aria-hidden="true">
                                                                                        <p>County is required</p>
                                                                                    </div>
		</div>
                                                                                <div class="form__field form__field-less-margin">
                                                                                    <input type="text" name="PostCode" id="PostCode" required="" ng-model="$ctrl.address.postcode" ng-change="$ctrl.chooseAddressManually($ctrl.address);" ng-click="$ctrl.chooseAddressManually($ctrl.address);" ng-focus="$ctrl.chooseAddressManually($ctrl.address);" float-placeholder="postcodeFM" placeholder-errors="$ctrl.formErrors" placeholder="Postcode" class="ng-pristine ng-untouched ng-isolate-scope ng-empty ng-invalid ng-invalid-required" aria-invalid="true"><label class="floating-placeholder">Postcode</label>
                                                                                        <div class="form__errors ng-hide" ng-show="postcodeFM.PostCode.$dirty &amp;&amp; postcodeFM.PostCode.$error.required" aria-hidden="true">
                                                                                            <p>Post Code is required</p>
                                                                                        </div>
		</div>
                                                                                    <a href="" ng-show="address" ng-click="selectedaddress=false;address=false" class="postcode-wrapper--marg bolder ng-hide" aria-hidden="true">Address lookup</a>
                                                                                </div>
                                                                            </div>
</postcode>
                                                                        <div class="form__submit">
                                                                            <input class="button button--lager" type="submit" name="submit" ng-disabled="sui.submitDisabled" ng-click="sui.submit($event)" value="Add profile details">
            </div>
        </form>
                                                                    </div>
  </section>
                                                            </div>
                                                            */