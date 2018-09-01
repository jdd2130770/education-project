import React, { Component } from 'react';
import './RegistrationForm.css';
import validator from 'validator';
import FormValidator from '../../validation/validation_class.js';
import ValidationRules from './validationRules';
class RegistrationForm extends Component {

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this)
        this.formSubmit = this.formSubmit.bind(this);
        this.autoFill = this.autoFill.bind(this);
        this.state={
            'firstName':'',
            'lastName':'',
             'emailAddress':'',
             'city':'',
             'state':'',
             'address1':'',
             'address2':'',
             'creditCardNumber':'',
             'expirationDate':'',
             'securityCode':'',
             'password':'',
             'confirmPassword':''
        }

        //for testing only, comment out before committing
        /*this.state={
            'firstName':'Jon',
            'lastName':'Smith',
            'emailAddress':'jdd2130@gmail.com',
            'city':'dallas',
            'state':'TX',
            'address1':'ABC',
            'address2':'XYZ',
            'creditCardNumber':'12345678',
            'expirationDate':'0920',
            'securityCode':'0615',
            'password':'test',
            'confirmPassword':'abc'
        }*/
    }

    state = {
        response: 'loading....'
    };

    async formSubmit(){

        var params = {
            'firstName':this.state.firstName,
            'lastName':this.state.lastName,
            'emailAddress':this.state.emailAddress,
            'city':this.state.city,
            'state':this.state.state,
            'address1':this.state.address1,
            'address2':this.state.address2,
            'creditCardNumber':this.state.creditCardNumber,
            'expirationDate':this.state.expirationDate,
            'securityCode':this.state.securityCode,
            'password':this.state.password,
            'confirmPassword':this.state.confirmPassword
        }

        //add confirm password rule to validation rules which matches state password and state confirm password

        var passwordMatch = () => (this.state.password === this.state.confirmPassword);


         ValidationRules.push({
            field: 'confirmPassword',
            method: passwordMatch,
            validWhen: true,
            message: 'Passwords must match'
        });

        console.log('validation rules are ',ValidationRules);


        var validatorObj = new FormValidator(ValidationRules);

        var validation= validatorObj.validate(this.state);

        if(validation.isValid) {


            console.log('params are ',params);
            const response = await fetch("api/registration/parent",{
                method:'post',
                body: JSON.stringify(params),
                headers:{
                    'content-type':'application/json'
                }
            });
            console.log('the response is ',response);
        }

        else{
           for(var field in params){

                   var fieldErrorLabel = field + 'ErrorMessage';

                   this.setState({
                      [fieldErrorLabel] : validation[field].message
                   });

            }


        }


    }

    handleInputChange(e){
      this.setState({[e.target.id]:e.target.value});
    }

    autoFill(){


    }
    render() {
    return (
      <div className="RegistrationForm">
          <h3>Parental Sign up Form</h3>

          <form>
              <div class="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text"  className="form-control"  value ={this.state.firstName}  id="firstName" onChange={this.handleInputChange}aria-describedby="emailHelp" placeholder="Enter first name"/>
                  <span className="formErrors">{this.state.firstNameErrorMessage}</span>
              </div>
              <div class="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" value ={this.state.lastName}  onChange={this.handleInputChange}  id="lastName" aria-describedby="emailHelp" placeholder="Enter last name"/>
                  <span className="formErrors">{this.state.lastNameErrorMessage}</span>
              </div>
              <div class="form-group">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input type="email" className="form-control" value ={this.state.emailAddress} onChange={this.handleInputChange} id="emailAddress" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
              </div>
              <div class="form-group">
                  <label htmlFor="exampleInputEmail1">City</label>
                  <input type="text" className="form-control" value ={this.state.city} onChange={this.handleInputChange} id="city" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <span className="formErrors">{this.state.cityErrorMessage}</span>
              </div>
              <div class="form-group">
                  <label htmlFor="exampleInputEmail1">State</label>
                  <input type="text" className="form-control" value ={this.state.state} onChange={this.handleInputChange} id="state" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <span className="formErrors">{this.state.stateErrorMessage}</span>
              </div>

              <div class="form-group">
                  <label htmlFor="address1">Billing Address Line 1</label>
                  <input type="text" className="form-control" value ={this.state.address1} onChange={this.handleInputChange} id="address1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <span className="formErrors">{this.state.address1ErrorMessage}</span>
              </div>

              <div class="form-group">
                  <label htmlFor="exampleInputEmail1">Billing Address Line 2</label>
                  <input type="text" className="form-control" value ={this.state.address2} onChange={this.handleInputChange} id="address2" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <span className="formErrors">{this.state.address2ErrorMessage}</span>
              </div>

              <div class="form-group">
                  <label htmlFor="exampleInputPassword1">Credit Card Number</label>
                  <input type="text" value ={this.state.creditCardNumber} onChange={this.handleInputChange} className="form-control" id="creditCardNumber" placeholder="Password"/>
                  <span className="formErrors">{this.state.creditCardNumberErrorMessage}</span>
              </div>

              <div class="form-group">
                  <label htmlFor="exampleInputPassword1">Expiration Date</label>
                  <input type="text" value ={this.state.expirationDate} onChange={this.handleInputChange} className="form-control" id="expirationDate" placeholder="Password"/>
                  <span className="formErrors">{this.state.expirationDateErrorMessage}</span>
              </div>

              <div class="form-group">
                  <label htmlFor="exampleInputPassword1">Security Code</label>
                  <input type="text"  className ="form-control" value ={this.state.securityCode} onChange={this.handleInputChange} class="form-control" id="securityCode" placeholder="Password"/>
                  <span className="formErrors">{this.state.securityCodeErrorMessage}</span>
              </div>

              <div class="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" value ={this.state.password} onChange={this.handleInputChange} class="form-control" id="password" placeholder="Password"/>
                  <span className="formErrors">{this.state.passwordErrorMessage}</span>
              </div>


              <div class="form-group">
                  <label htmlFor="exampleInputPassword1">Confirm Password</label>
                  <input type="password" className="form-control" value ={this.state.confirmPassword} onChange={this.handleInputChange} class="form-control" id="confirmPassword" placeholder="Confirm Password"/>
                  <span className="formErrors">{this.state.confirmPasswordErrorMessage}</span>
              </div>

              <button type="button" class="formSubmitBtn btn btn-lg btn-success" onClick={this.formSubmit}>Submit</button>
          </form>
      </div>
    );
  }
}

export default RegistrationForm;
