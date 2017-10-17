import React, { Component } from "react";
import logo from "./logo.svg";
// import './DataUser.css';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";

class Howitworking extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>How it works:</h1>
            <hr />
            <p>
              Think of us as a breakdown service for your bag. We put you before
              the paperwork, doing everything we can to help when something goes
              wrong.
            </p>
            <p>
              Your membership covers the devices you’ve told us about both
              inside and away from your home. You also get enterprise-grade data
              recovery with Crashplan.
            </p>
            <p>Insurance just got a makeover!</p>
            <p>
              You can register all the items you wish to insure online and
              manage them through our secure portal. Make sure you keep this
              updated so that we can provide you with the optimal care.
            </p>
            <p>
              Take a look at our policy documentation for a detailed breakdown
              of the terms -{" "}
              <a
                className="a"
                href="https://www.dropbox.com/s/tphfr5stslbyl88/Policy%20schedule%20%26%20Key%20facts.pdf?dl=0"
              >
                InMyBag Policy Documentation
              </a>
            </p>
            <p>
              If you need to tell us about something that has happened, the best
              place to start is our online claims platform, but you can also
              call us on +44 (0) 7512 143 989 or email us at{" "}
              <a a className="a" href="mailto:hello@inmybag.co">
                hello@inmybag.co
              </a>
              If you have any questions, please take a look at our FAQs or email
              us. We're always happy to help!
            </p>
          </div>
          <div className="a" />
          <h1>This is what we cover:</h1>
          <hr />
          <h4 className="a" >Accidental damage:</h4>
          <p>
            It happens to the best of us. So whether you’ve anointed your laptop
            with tea or juggled your phone into the loo, we can help. We’ll
            repair the damage or replace the device with one of the same or
            similar specification. Also, if you’re going to be without the
            device while it is repaired, we can sort out a loan device, because
            life (and work) goes on.
          </p>
          <h4 className="a" >Accidental loss:</h4>
          <p>
            If you lose your device we’ll get you a replacement of the same or
            similar specification. We can generally do this the same day or next
            day.
          </p>
          <h4 className="a" >Theft</h4>
          <p>
            If someone nabs your bag, we’ll replace any covered devices taken
            with one of the same or similar specification.
          </p>
          <h4 className="a" >Breakdown</h4>
          <p>
            If your device breaks down after the expiry of the manufacturer’s
            warranty we’ll repair the device (where possible) or replace it with
            one of the same or similar specification.If it breaks down within
            warranty, you’ll need to get it fixed under warranty, but we can
            help out with a loan device if that’s going to take time.
          </p>
          <h4 className="a" > Unauthorised calls or data use</h4>
          <p>
            If your phone has been stolen, we’ll will pay up to £150 provided
            you’ve told your phone company within 24 hours.
          </p>
          <h4 className="a">Overseas protection</h4>
          <p>
            You get the same level of protection anywhere in the world for an
            annual total of 90 days. We may not be able to provide exactly the
            same level of recovery as we can in the UK, but we’ll still do
            everything we can to help. For example, if your laptop is stolen,
            but you’re near somewhere you can buy a replacement, we can transfer
            the money to you instantly.
          </p>
        </div>
      </div>
    );
  }
}

export default Howitworking;
