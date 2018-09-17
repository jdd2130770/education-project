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
            'city':'',
            'state':'',
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
            'city':this.state.city,
            'state':this.state.state,
        }

        this.props.saveValues(data);
        this.props.nextStep();
    }


    render() {
        return (
            <div>

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
                <button onClick={this.saveAndContinue} className="btn-lg btn-primary">Save and Continue</button>
            </div>
        );
    }
}

export default BasicInfo;
