import React, { Component } from 'react';
import './RegistrationForm.css';

class StudentInfo extends Component {

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveAndContinue = this.saveAndContinue.bind(this);

        this.state = {
            'student1FirstName':'',
            'student1LastName':'',
            'student1UserName':'',
            'student1Grade':'',
            'student1DateOfBirth':'',
            'student1Password':'',
            'student1ConfirmPassword':'',

            'student2FirstName':'',
            'student2LastName':'',
            'student2UserName':'',
            'student2Grade':'',
            'student2DateOfBirth':'',
            'student2Password':'',
            'student2ConfirmPassword':''
        }
    }



    componentDidMount() {

    }

    handleInputChange(e){
        this.setState({[e.target.id]:e.target.value});
    }
    saveAndContinue (e){
        e.preventDefault();
        console.log(this.state);
        var data={
            'student1FirstName':this.state.student1FirstName,
            'student1LastName':this.state.student1LastName,
            'student1UserName':this.state.student1UserName,
            'student1Password':this.state.student1Password,
            'student1Grade':this.state.student1Grade,
            'student1DateOfBirth':this.state.student1DateOfBirth,
            'student2FirstName':this.state.student2FirstName,
            'student2LastName':this.state.student2LastName,
            'student2UserName':this.state.student2UserName,
            'student2Password':this.state.student2Password,
            'student2Grade':this.state.student2Grade,
            'student2DateOfBirth':this.state.student2DateOfBirth,
        }

        this.props.saveValues(data);
        this.props.nextStep();
    }


    render() {
        return (
            <div>

                <div className="student1">
                    <h3>First Student</h3>
                <div class="form-group">
                    <label htmlFor="student1FirstName">First Name</label>
                    <input type="text" className="form-control"  value={this.state.student1FirstName}  id="student1FirstName" onChange={this.handleInputChange} aria-describedby="emailHelp" placeholder="First Name"/>
                    <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="student1lastName">Last Name</label>
                    <input type="text" className="form-control" value ={this.state.student1LastName}  onChange={this.handleInputChange}  id="student1LastName" aria-describedby="emailHelp" placeholder="Last name"/>
                    <span className="formErrors">{this.state.lastNameErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="studentUserName">Username </label>
                    <input type="text" className="form-control" value ={this.state.student1UserName} onChange={this.handleInputChange} id="student1UserName" aria-describedby="emailHelp" placeholder="Enter unique username for signing in"/>
                    <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
                </div>
                    <div class="form-group">
                        <label htmlFor="emailAddress">Password</label>
                        <input type="password" className="form-control" value ={this.state.student1Password} onChange={this.handleInputChange} id="password1" aria-describedby="emailHelp" placeholder="Enter password"/>
                        <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="emailAddress">Confirm Password</label>
                        <input type="password" className="form-control" value ={this.state.student1ConfirmPassword} onChange={this.handleInputChange} id="password2" aria-describedby="emailHelp" placeholder="Confirm Password"/>
                        <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
                    </div>
                <div class="form-group">
                    <label htmlFor="student1Grade">Grade</label>
                    <select id="student1Grade" class="form-control" onChange={this.handleInputChange}>
                        <option disabled selected>Select Grade</option>
                        <option>9th</option>
                        <option>10th</option>
                        <option>11th</option>
                        <option>12th</option>
                    </select>
                    <span className="formErrors">{this.state.cityErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="student1State">Date of birth</label>
                    <input type="text" className="form-control" value ={this.state.student1DateOfBirth} onChange={this.handleInputChange} id="student1DateOfBirth" aria-describedby="emailHelp" placeholder="Student 1 Date of Birth"/>
                    <span className="formErrors">{this.state.stateErrorMessage}</span>
                </div>

                </div>

                <div className="student2">
                    <h3>Second Student</h3>
                    <div class="form-group">
                        <label htmlFor="student2FirstName">First Name</label>
                        <input type="text" className="form-control"  value={this.state.student2FirstName}  id="student2FirstName" onChange={this.handleInputChange} aria-describedby="emailHelp" placeholder="First Name"/>
                        <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="student2lastName">Last Name</label>
                        <input type="text" className="form-control" value ={this.state.student2LastName}  onChange={this.handleInputChange}  id="student2LastName" aria-describedby="emailHelp" placeholder="Last name"/>
                        <span className="formErrors">{this.state.lastNameErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="studentUserName">Username </label>
                        <input type="text" className="form-control" value ={this.state.student2UserName} onChange={this.handleInputChange} id="student2UserName" aria-describedby="emailHelp" placeholder="Enter unique username for signing in"/>
                        <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="emailAddress">Password</label>
                        <input type="password" className="form-control" value ={this.state.student2Password} onChange={this.handleInputChange} id="password1" aria-describedby="emailHelp" placeholder="Enter password"/>
                        <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="emailAddress">Confirm Password</label>
                        <input type="password" className="form-control" value ={this.state.student2ConfirmPassword} onChange={this.handleInputChange} id="password2" aria-describedby="emailHelp" placeholder="Confirm Password"/>
                        <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="student2Grade">Grade</label>
                        <select id="student2Grade" class="form-control" onChange={this.handleInputChange}>
                            <option disabled selected>Select Grade</option>
                            <option>9th</option>
                            <option>10th</option>
                            <option>11th</option>
                            <option>12th</option>
                        </select>
                        <span className="formErrors">{this.state.cityErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="student2State">Date of birth</label>
                        <input type="text" className="form-control" value ={this.state.student2DateOfBirth} onChange={this.handleInputChange} id="student2DateOfBirth" aria-describedby="emailHelp" placeholder="Date of Birth"/>
                        <span className="formErrors">{this.state.stateErrorMessage}</span>
                    </div>
                </div>

                <button onClick={this.saveAndContinue} className="btn-lg btn-primary">Save and Continue</button>

            </div>


        );
    }
}

export default StudentInfo;
