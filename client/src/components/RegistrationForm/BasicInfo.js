import React, { Component } from 'react';
import './RegistrationForm.css';

class BasicInfo extends Component {

    constructor(props) {
        super(props);


        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveAndContinue = this.saveAndContinue.bind(this);
        this.state = {
            'firstName':'',
            'lastName':'',
            'emailAddress':'',
            'password1':'',
            'password2':''
        };
    }



    componentDidMount() {

    }

    handleInputChange(e){
        this.setState({[e.target.id]:e.target.value});
    }
    saveAndContinue (e){
        e.preventDefault();
        var data={
            'firstName':this.state.firstName,
            'lastName':this.state.lastName,
            'emailAddress':this.state.emailAddress,
            'password1':this.state.password1,
        }

        this.props.saveValues(data);
        this.props.nextStep();
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
                    <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="emailAddress">Confirm Password</label>
                    <input type="password" className="form-control" value ={this.state.password2} onChange={this.handleInputChange} id="password2" aria-describedby="emailHelp" placeholder="Confirm Password"/>
                    <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
                </div>
                <button onClick={this.saveAndContinue} className="btn-lg btn-primary">Save and Continue</button>
            </div>
        );
    }
}

export default BasicInfo;
