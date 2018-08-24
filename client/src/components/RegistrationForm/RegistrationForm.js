import React, { Component } from 'react';
import './RegistrationForm.css';

class RegistrationForm extends Component {

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this)
        this.formSubmit = this.formSubmit.bind(this);
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

    }

    state = {
        response: 'loading....'
    };

    async formSubmit(){
        console.log(this.state);
         const response = await fetch("api/registration/parent",{
         method:'post',
         body: JSON.stringify(this.state),
         headers:{
             'content-type':'application/json'
         }
     });
         console.log('the response is ',response);
    }

    handleInputChange(e){
      console.log('this is running');
      this.setState({[e.target.id]:e.target.value});
      console.log(this.state);
    }

    render() {
    return (
      <div className="RegistrationForm">
          <h3>Parental Sign up Form</h3>
          <form>
              <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text"  class="form-control"  value ={this.state.firstName}  id="firstName" onChange={this.handleInputChange}aria-describedby="emailHelp" placeholder="Enter first name"/>

              </div>
              <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" class="form-control" value ={this.state.lastName}  onChange={this.handleInputChange}  id="lastName" aria-describedby="emailHelp" placeholder="Enter last name"/>

              </div>
              <div class="form-group">
                  <label for="emailAddress">Email Address</label>
                  <input type="email" class="form-control" value ={this.state.emailAddress} onChange={this.handleInputChange} id="emailAddress" aria-describedby="emailHelp" placeholder="Enter email"/>

              </div>
              <div class="form-group">
                  <label for="exampleInputEmail1">City</label>
                  <input type="text" class="form-control" value ={this.state.city} onChange={this.handleInputChange} id="city" aria-describedby="emailHelp" placeholder="Enter email"/>

              </div>
              <div class="form-group">
                  <label for="exampleInputEmail1">State</label>
                  <input type="text" class="form-control" value ={this.state.state} onChange={this.handleInputChange} id="state" aria-describedby="emailHelp" placeholder="Enter email"/>

              </div>

              <div class="form-group">
                  <label for="address1">Billing Address Line 1</label>
                  <input type="text" class="form-control" value ={this.state.address1} onChange={this.handleInputChange} id="address1" aria-describedby="emailHelp" placeholder="Enter email"/>

              </div>

              <div class="form-group">
                  <label for="exampleInputEmail1">Billing Address Line 2</label>
                  <input type="text" class="form-control" value ={this.state.address2} onChange={this.handleInputChange} id="address2" aria-describedby="emailHelp" placeholder="Enter email"/>

              </div>

              <div class="form-group">
                  <label for="exampleInputPassword1">Credit Card Number</label>
                  <input type="text" value ={this.state.creditCardNumber} onChange={this.handleInputChange} class="form-control" id="creditCardNumber" placeholder="Password"/>
              </div>

              <div class="form-group">
                  <label for="exampleInputPassword1">Expiration Date</label>
                  <input type="text" value ={this.state.expirationDate} onChange={this.handleInputChange} class="form-control" id="expirationDate" placeholder="Password"/>
              </div>

              <div class="form-group">
                  <label for="exampleInputPassword1">Security Code</label>
                  <input type="text"  value ={this.state.securityCode} onChange={this.handleInputChange} class="form-control" id="securityCode" placeholder="Password"/>
              </div>

              <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" value ={this.state.password} onChange={this.handleInputChange} class="form-control" id="password" placeholder="Password"/>
              </div>


              <div class="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input type="password" value ={this.state.confirmPassword} onChange={this.handleInputChange} class="form-control" id="confirmPassword" placeholder="Confirm Password"/>
              </div>

              <button type="submit" class="btn btn-lg btn-success"onClick={this.formSubmit}>Submit</button>
          </form>
      </div>
    );
  }
}

export default RegistrationForm;
