import React, { Component } from 'react';
import './RegistrationForm.css';

class FormPart2 extends Component {

    constructor(props) {
        super(props);


    }

    state = {
        'student1FirstName':this.state.student1FirstName,
        'student1LastName':this.state.student1LastName,
        'student1UserName':this.state.student1UserName,
        'student1Grade':this.state.student1Grade,
        'student1DateOfBirth':this.state.student1DateOfBirth,

        'student2FirstName':this.state.student2FirstName,
        'student2LastName':this.state.student2LastName,
        'student2UserName':this.state.student2UserName,
        'student2Grade':this.state.student2Grade,
        'student2DateOfBirth':this.state.student2DateOfBirth,

        'student3FirstName':this.state.student3FirstName,
        'student3LastName':this.state.student3LastName,
        'student3UserName':this.state.student3UserName,
        'student3Grade':this.state.student3Grade,
        'student3DateOfBirth':this.state.student3DateOfBirth,

        'student4FirstName':this.state.student4FirstName,
        'student4LastName':this.state.student4LastName,
        'student4UserName':this.state.student4UserName,
        'student4Grade':this.state.student4Grade,
        'student4DateOfBirth':this.state.student4DateOfBirth
    };

    componentDidMount() {

    }

    saveAndContinue (e){
        e.preventDefault();
        var data={
            'student1FirstName':this.state.student1FirstName,
            'student1LastName':this.state.student1LastName,
            'student1UserName':this.state.student1UserName,
            'student1Grade':this.state.student1Grade,
            'student1DateOfBirth':this.state.student1DateOfBirth,

            'student2FirstName':this.state.student2FirstName,
            'student2LastName':this.state.student2LastName,
            'student2UserName':this.state.student2UserName,
            'student2Grade':this.state.student2Grade,
            'student2DateOfBirth':this.state.student2DateOfBirth,

            'student3FirstName':this.state.student3FirstName,
            'student3LastName':this.state.student3LastName,
            'student3UserName':this.state.student3UserName,
            'student3Grade':this.state.student3Grade,
            'student3DateOfBirth':this.state.student3DateOfBirth,

            'student4FirstName':this.state.student4FirstName,
            'student4LastName':this.state.student4LastName,
            'student4UserName':this.state.student4UserName,
            'student4Grade':this.state.student4Grade,
            'student4DateOfBirth':this.state.student4DateOfBirth


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
                    <label htmlFor="student1FirstName"></label>
                    <input type="text" className="form-control"  value={this.state.student1FirstName}  id="student1FirstName" onChange={this.handleInputChange} aria-describedby="emailHelp" placeholder="First Name"/>
                    <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="student1lastName">Last Name</label>
                    <input type="text" className="form-control" value ={this.state.student1LastName}  onChange={this.handleInputChange}  id="student1lastName" aria-describedby="emailHelp" placeholder="Last name"/>
                    <span className="formErrors">{this.state.lastNameErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="studentUserName">Username </label>
                    <input type="text" className="form-control" value ={this.state.student1UserName} onChange={this.handleInputChange} id="student1UserName" aria-describedby="emailHelp" placeholder="Enter unique username for signing in"/>
                    <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="student1Grade">Grade</label>
                    <input type="text" className="form-control" value ={this.state.student1Grade} onChange={this.handleInputChange} id="city" aria-describedby="emailHelp" placeholder="Student 1 Grade"/>
                    <span className="formErrors">{this.state.cityErrorMessage}</span>
                </div>
                <div class="form-group">
                    <label htmlFor="student1State">Date of birth</label>
                    <input type="text" className="form-control" value ={this.state.student1DateOfBirth} onChange={this.handleInputChange} id="state" aria-describedby="emailHelp" placeholder="Student 1 Date of Birth"/>
                    <span className="formErrors">{this.state.stateErrorMessage}</span>
                </div>
                <button onClick={this.saveAndContinue} className="btn-lg btn-primary">Save and Continue</button>
                </div>

                <div className="student2">
                    <h3>First Student</h3>
                    <div class="form-group">
                        <label htmlFor="student2FirstName"></label>
                        <input type="text" className="form-control"  value={this.state.student2FirstName}  id="student2FirstName" onChange={this.handleInputChange} aria-describedby="emailHelp" placeholder="First Name"/>
                        <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="student2lastName">Last Name</label>
                        <input type="text" className="form-control" value ={this.state.student2LastName}  onChange={this.handleInputChange}  id="student2lastName" aria-describedby="emailHelp" placeholder="Last name"/>
                        <span className="formErrors">{this.state.lastNameErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="studentUserName">Username </label>
                        <input type="text" className="form-control" value ={this.state.student2UserName} onChange={this.handleInputChange} id="student2UserName" aria-describedby="emailHelp" placeholder="Enter unique username for signing in"/>
                        <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="student2Grade">Grade</label>
                        <input type="text" className="form-control" value ={this.state.student2Grade} onChange={this.handleInputChange} id="city" aria-describedby="emailHelp" placeholder="Grade"/>
                        <span className="formErrors">{this.state.cityErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="student2State">Date of birth</label>
                        <input type="text" className="form-control" value ={this.state.student2DateOfBirth} onChange={this.handleInputChange} id="state" aria-describedby="emailHelp" placeholder="Date of Birth"/>
                        <span className="formErrors">{this.state.stateErrorMessage}</span>
                    </div>
                    <button onClick={this.saveAndContinue} className="btn-lg btn-primary">Save and Continue</button>
                </div>

                <div className="student3">
                    <h3>First Student</h3>
                    <div class="form-group">
                        <label htmlFor="student3FirstName"></label>
                        <input type="text" className="form-control"  value={this.state.student3FirstName}  id="student3FirstName" onChange={this.handleInputChange} aria-describedby="emailHelp" placeholder="First Name"/>
                        <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="student3lastName">Last Name</label>
                        <input type="text" className="form-control" value ={this.state.student3LastName}  onChange={this.handleInputChange}  id="student3lastName" aria-describedby="emailHelp" placeholder="Last name"/>
                        <span className="formErrors">{this.state.lastNameErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="studentUserName">Username </label>
                        <input type="text" className="form-control" value ={this.state.student3UserName} onChange={this.handleInputChange} id="student3UserName" aria-describedby="emailHelp" placeholder="Enter unique username for signing in"/>
                        <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="student3Grade">Grade</label>
                        <input type="text" className="form-control" value ={this.state.student3Grade} onChange={this.handleInputChange} id="city" aria-describedby="emailHelp" placeholder="Grade"/>
                        <span className="formErrors">{this.state.cityErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="student3State">Date of birth</label>
                        <input type="text" className="form-control" value ={this.state.student3DateOfBirth} onChange={this.handleInputChange} id="state" aria-describedby="emailHelp" placeholder="Date of Birth"/>
                        <span className="formErrors">{this.state.stateErrorMessage}</span>
                    </div>
                    <button onClick={this.saveAndContinue} className="btn-lg btn-primary">Save and Continue</button>
                </div>

                <div className="student4">
                    <h4>First Student</h4>
                    <div class="form-group">
                        <label htmlFor="student4FirstName"></label>
                        <input type="text" className="form-control"  value={this.state.student4FirstName}  id="student4FirstName" onChange={this.handleInputChange} aria-describedby="emailHelp" placeholder="First Name"/>
                        <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="student4lastName">Last Name</label>
                        <input type="text" className="form-control" value ={this.state.student4LastName}  onChange={this.handleInputChange}  id="student4lastName" aria-describedby="emailHelp" placeholder="Last name"/>
                        <span className="formErrors">{this.state.lastNameErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="studentUserName">Username </label>
                        <input type="text" className="form-control" value ={this.state.student4UserName} onChange={this.handleInputChange} id="student4UserName" aria-describedby="emailHelp" placeholder="Enter unique username for signing in"/>
                        <span className="formErrors">{this.state.emailAddressErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="student4Grade">Grade</label>
                        <input type="text" className="form-control" value ={this.state.student4Grade} onChange={this.handleInputChange} id="city" aria-describedby="emailHelp" placeholder="Grade"/>
                        <span className="formErrors">{this.state.cityErrorMessage}</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="student4State">Date of birth</label>
                        <input type="text" className="form-control" value ={this.state.student4DateOfBirth} onChange={this.handleInputChange} id="state" aria-describedby="emailHelp" placeholder="Date of Birth"/>
                        <span className="formErrors">{this.state.stateErrorMessage}</span>
                    </div>
                    <button onClick={this.saveAndContinue} className="btn-lg btn-primary">Save and Continue</button>
                </div>


        );
    }
}

export default FormPart2;
