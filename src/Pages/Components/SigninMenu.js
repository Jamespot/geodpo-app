import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

class SigninMenu extends Component {

      confirmEdition () {

            this.props.api.auth({
              username: document.getElementById("email-form").value,
              password: document.getElementById("password-form").value
            }, "signin", data => {

                  this.props.edit(document.getElementById("email-form").value);
            }, err => {

                  let box = document.getElementById("signedup-box");
                  box.innerHTML = "Accès refusé.";
                  box.classList.add("warning");
                  box.classList.remove("hidden-box");
            });
      }

	render() {

		return (
			<div>
      			<div id="signin-box">
                              <div className="profile-box">
            				<div className="content-box">
                                          <div className="tri-box"/>
            					<div className="tri-box">
                                                <div className="menu-symbol">
                  					    <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 300 300">
                                                    <path d="M287.305,243.005c-0.136-1.772-0.928-3.476-2.227-4.747L172.835,126.015c4.416-10.403,6.747-21.669,6.747-33.312
                                                      c0-22.754-8.875-44.163-24.938-60.266C138.558,16.366,117.164,7.5,94.397,7.5c-22.778,0-44.135,8.869-60.247,24.95
                                                      C0.907,65.675,0.9,119.716,34.145,152.938c16.111,16.115,37.475,24.99,60.241,24.99c11.646,0,22.884-2.35,33.312-6.772
                                                      l36.874,36.902c1.534,1.515,3.557,2.319,5.74,2.248l20.095-0.705l-0.656,20.145c-0.062,2.125,0.705,4.193,2.245,5.706
                                                      c1.484,1.512,3.569,2.334,5.685,2.248l20.169-0.689l-0.724,20.123c-0.063,2.127,0.754,4.199,2.238,5.712
                                                      c1.534,1.512,3.321,2.325,5.74,2.251l20.119-0.684l-0.674,20.126c-0.118,2.232,0.822,4.379,2.418,5.903
                                                      c1.472,1.339,3.309,2.06,5.245,2.06c0.278,0,0.563-0.012,0.847-0.037l30.851-3.426c4.169-0.455,7.205-4.175,6.847-8.353
                                                      L287.305,243.005z M84.106,82.415c-9.476,9.466-24.796,9.466-34.252,0c-9.47-9.469-9.47-24.786,0-34.246
                                                      c9.456-9.46,24.771-9.469,34.252-0.003C93.563,57.625,93.557,72.952,84.106,82.415z M260.97,245.575
                                                      c-1.126,1.126-2.635,1.688-4.101,1.688s-2.976-0.563-4.101-1.688l-95.501-95.529c2.659-2.867,5.077-5.885,7.273-9.058l96.429,96.41
                                                      C263.221,239.65,263.221,243.324,260.97,245.575z"/>
                                                    </svg>
                                                </div>
            					</div>
                                          <div className="tri-box"/>
            				</div>
                                    <Form>
                                    <div className="content-box">
                                                <Input type="text" name="email" id="email-form" placeholder="Email"/>
                                                <Input type="password" name="password" id="password-form" placeholder="Mot de passe"/>
                                    </div>
                                    <div className="content-box contact-box">
                                                <button type="button" className="contact-button" onClick={() => this.confirmEdition()}>Connexion</button>
                                                <div id="signedup-box" className="ext-box hidden-box"></div>
                                    </div>
                                    </Form>
                              </div>
                        </div>
      		</div>
		)
	}
}

export default SigninMenu