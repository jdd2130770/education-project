import React, { Component } from 'react';
import validator from 'validator';
import FormValidator from '../../validation/validation_class';


class BasicInfo extends Component {

    constructor(props) {
        super(props);


        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveAndContinue = this.saveAndContinue.bind(this);
        this.getValidationRules = this.getValidationRules.bind(this);
        this.state = {
            'firstName':'',
            'lastName':'',
            'emailAddress':'',
            'password1':'',
            'password2':''
        };
    }

    componentWillMount(){

    }


    componentDidMount() {


    }

    handleInputChange(e){
        this.setState({[e.target.id]:e.target.value});
    }
    saveAndContinue (e){

        e.preventDefault();

       var validationRules = this.getValidationRules();

       var validatorObj = new FormValidator(validationRules);
       var validation = validatorObj.validate(this.state);

        var data={
            'firstName':this.state.firstName,
            'lastName':this.state.lastName,
            'emailAddress':this.state.emailAddress,
            'password1':this.state.password1,
            'password2':this.state.password2
        };
       if(validation.isValid){

           this.props.saveValues(data);
           this.props.nextStep();
       }

       else {

           for(var field in data){
               var fieldErrorLabel = field + 'ErrorMessage';

               this.setState({
                   [fieldErrorLabel] : validation[field].message
               });
           }
       }

    }

    getValidationRules(){
        var passwordMatch = () => (this.state.password === this.state.confirmPassword);

       var validationRules =   [
            {
                field:'firstName',
                method:validator.isEmpty,
                validWhen:false,
                message:'Field required'
            },
            {
                field:'lastName',
                method:validator.isEmpty,
                validWhen:false,
                message:'Field required'
            },
            {
                field:'emailAddress',
                method:validator.isEmpty,
                validWhen:false,
                message:'Field required'
            },
            {
               field:'emailAddress',
               method:validator.isEmail,
               validWhen:true,
               message:'Must be a valid email address'
            },
            {
                field:'password1',
                method:validator.isEmpty,
                validWhen:false,
                message:'Field required'
            },
            {
                field:'password2',
                method:passwordMatch,
                validWhen:true,
                message:'Passwords must match'
            },
            {
               field:'password2',
               method:validator.isEmpty,
               validWhen:false,
               message:'Field is required'
            }
        ];

       return validationRules;
    }

    render() {
        return (
            <div>
                <h3>Registration Form</h3>
              <div class="form-group">
                <label htmlFor="firstName">Parent First Name</label>
                <input type="text"  className="form-control"  value ={this.state.firstName}  id="firstName" onChange={this.handleInputChange}aria-describedby="emailHelp" placeholder="Enter first name"/>
                <span className="formErrors">{this.state.firstNameErrorMessage}</span>
              </div>
              <div class="form-group">
                  <label htmlFor="lastName">Parent Last Name</label>
                  <input type="text" className="form-control" value ={this.state.lastName}  onChange={this.handleInputChange}  id="lastName" aria-describedby="emailHelp" placeholder="Enter last name"/>
                  <span className="formErrors">{this.state.lastNameErrorMessage}</span>
              </div>
              <div class="form-group">
                 <label htmlFor="emailAddress">Email Address</label>
                 <input type="email" className="form-control" value ={this.state.emailAddress} onChange={this.handleInputChange} id="emailAddress" aria-describedby="emailHelp" placeholder="Enter email"/>
                 <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
              </div>
                <div class="form-group">
                    <label htmlFor="emailAddress">Password</label>
                    <input type="password" className="form-control" value ={this.state.password1} onChange={this.handleInputChange} id="password1" aria-describedby="emailHelp" placeholder="Enter password"/>
                    <span className="formErrors">{this.state.password1ErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="emailAddress">Confirm Password</label>
                    <input type="password" className="form-control" value ={this.state.password2} onChange={this.handleInputChange} id="password2" aria-describedby="emailHelp" placeholder="Confirm Password"/>
                    <span className="formErrors">{this.state.password2ErrorMessage}</span>
                </div>
                <button onClick={this.saveAndContinue} className="btn-lg btn-primary">Save and Continue</button>
            </div>
        );
    }



}

export default BasicInfo;
