import React, { Component } from 'react';
import './RegistrationForm.css';

class BillingInfo extends Component {

    constructor(props) {
        super(props);


        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveAndContinue = this.saveAndContinue.bind(this);
        this.state = {
            'billingFirstName':'',
            'billingLastName':'',
            'billingAddress1':'',
            'billingAddress2':'',
            'city':'',
            'state':'',
            'zip':'',
            'creditCard':'',
            'expirationDate':'',
            'securityCode':'',
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
            'billingFirstName':this.state.billingFirstName,
            'billingLastName':this.state.billingLastName,
            'billingAddress1':this.state.billingAddress1,
            'billingAddress2':this.state.billingAddress2,
            'city':this.state.city,
            'state':this.state.state,
            'zip':this.state.zip,
            'creditCard':this.state.creditCard,
            'expirationDate':this.state.expirationDate,
            'securityCode':this.state.securityCode,
            'formComplete':true
        }

        this.props.saveValues(data);
    }


    render() {
        return (
            <div>
                <h3>Billing Info</h3>
                <div class="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"  className="form-control"  value ={this.state.billingFirstName}  id="billingFirstName" onChange={this.handleInputChange}aria-describedby="emailHelp" placeholder="Enter first name"/>
                    <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" value ={this.state.billingLastName}  onChange={this.handleInputChange}  id="billingLastName" aria-describedby="emailHelp" placeholder="Enter last name"/>
                    <span className="formErrors">{this.state.lastNameErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="emailAddress">Address Line 1</label>
                    <input type="email" className="form-control" value ={this.state.billingAddress1} onChange={this.handleInputChange} id="billingAddress1" aria-describedby="emailHelp" placeholder="Billing Address 1"/>
                    <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Address Line 2</label>
                    <input type="text" className="form-control" value ={this.state.billingAddress2} onChange={this.handleInputChange} id="billingAddress2" aria-describedby="emailHelp" placeholder="Billing Address 2"/>
                    <span className="formErrors">{this.state.cityErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">City</label>
                    <input type="text" className="form-control" value ={this.state.city} onChange={this.handleInputChange} id="city" aria-describedby="emailHelp" placeholder="Enter city"/>
                    <span className="formErrors">{this.state.stateErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">State</label>
                    <input type="text" className="form-control" value ={this.state.state} onChange={this.handleInputChange} id="state" aria-describedby="emailHelp" placeholder="Enter state"/>
                    <span className="formErrors">{this.state.stateErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Zip</label>
                    <input type="text" className="form-control" value ={this.state.zip} onChange={this.handleInputChange} id="zip" aria-describedby="emailHelp" placeholder="Enter zip"/>
                    <span className="formErrors">{this.state.stateErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Credit Card</label>
                    <input type="text" className="form-control" value ={this.state.creditCard} onChange={this.handleInputChange} id="creditCard" aria-describedby="emailHelp" placeholder="Enter credit card"/>
                    <span className="formErrors">{this.state.stateErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Expiration Date</label>
                    <input type="text" className="form-control" value ={this.state.expirationDate} onChange={this.handleInputChange} id="expirationDate" aria-describedby="emailHelp" placeholder="Expiration Date"/>
                    <span className="formErrors">{this.state.stateErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Security Code</label>
                    <input type="text" className="form-control" value ={this.state.securityCode} onChange={this.handleInputChange} id="securityCode" aria-describedby="emailHelp" placeholder="Enter security code"/>
                    <span className="formErrors">{this.state.stateErrorMessage}</span>
                </div>
                <button onClick={this.saveAndContinue} className="btn-lg btn-primary">Save and Continue</button>
            </div>
        );
    }
}

export default BillingInfo;
