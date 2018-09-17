import React, { Component } from 'react';
import './RegistrationForm.css';

class StudentCourses extends Component {

    constructor(props) {
        super(props);


        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveAndContinue = this.saveAndContinue.bind(this);
        this.state = {
           'showStudent2':false,
            'student1Math':'',
            'student1Science':'',
            'student1English':'',
            'student1SocialStudies':'',
            'student1English':'',
            'student1Elective':'',
            'student2Math':'',
            'student2English':'',
            'student2Math':'',
            'student2Science':'',
            'student2SocialStudies':'',
            'student2Elective':''
        };
    }



    componentDidMount() {

        if(this.props.fieldValues.student2FirstName !==''){
            this.setState({'showStudent2':true})
        }
    }

    handleInputChange(e){
        this.setState({[e.target.id]: e.target.value});
    }
    saveAndContinue (e){
        e.preventDefault();
        var data={
            'student1Math':this.state.student1Math,
            'student1Science':this.state.student1Science,
            'student1English':this.state.student1English,
            'student1SocialStudies':this.state.student1SocialStudies,
            'student1English':this.state.student1English,
            'student1Elective':this.state.student1Elective,
            'student2Math':this.state.student2Math,
            'student2English':this.state.student2English,
            'student2Math':this.state.student2Math,
            'student2Science':this.state.student2Science,
            'student2SocialStudies':this.state.student2SocialStudies,
            'student2Elective':this.state.student2Elective
        }

        this.props.saveValues(data);
        this.props.nextStep();
    }


    render() {
        return (
            <div>

                <div className="student1">

                <h3>Select Courses for Student 1</h3>
                <div class="form-group">
                    <label htmlFor="student1Math">Math</label>
                     <select id='student1Math' class="form-control" onChange={this.handleInputChange}>
                         <option disabled selected>Choose Math</option>
                         <option>Pre-Algebra</option>
                         <option>Algebra I</option>
                         <option>Algebra II</option>
                         <option>Pre-Calculus</option>
                         <option>Calculus I</option>
                         <option>Calculus II</option>
                     </select>
                    <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                </div>

                <div class="form-group">
                    <label htmlFor="student1Science">Science</label>
                    <select id="student1Science" class="form-control" onChange={this.handleInputChange}>
                        <option disabled selected>Choose Science</option>
                        <option>Biology</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Astronomy</option>
                    </select>
                    <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                </div>

                <div class="form-group">
                    <label htmlFor="firstName">Social Studies</label>
                    <select id="student1SocialStudies"  class="form-control" onChange={this.handleInputChange}>
                        <option disabled selected>Choose Social Studies</option>
                        <option>African History</option>
                        <option>African American History</option>
                        <option>Contemporary African Americans of Distinction</option>
                        <option>World History</option>
                    </select>
                    <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                </div>

                <div class="form-group">
                    <label htmlFor="student1English">English</label>
                    <select id="student1English" class="form-control"  onChange={this.handleInputChange}>
                        <option disabled selected>Choose English</option>
                       <option>9th Grade English</option>
                       <option>10th Grade English</option>
                       <option>11th Grade English </option>
                       <option>12th Grade English</option>
                    </select>
                    <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                </div>

                <div class="form-group">
                    <label htmlFor="student1Elective">Elective</label>
                    <select id="student1Elective" class="form-control" onChange={this.handleInputChange}>
                        <option disabled selected>Choose Elective</option>
                        <option>Computer Science</option>
                        <option>Robotics</option>
                        <option>African American Literature</option>
                        <option>Stock Market Investing</option>
                    </select>
                    <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                  </div>

                </div>

                { this.state.showStudent2 && <div className="student2" >
                    <h3>Select Courses For Student 2</h3>


                    <div class="form-group">
                        <label htmlFor="student2Math">Math</label>
                        <select id='student2Math' class="form-control" onChange={this.handleInputChange}>
                            <option disabled selected>Choose Math</option>
                            <option>Pre-Algebra</option>
                            <option>Algebra I</option>
                            <option>Algebra II</option>
                            <option>Pre-Calculus</option>
                            <option>Calculus I</option>
                            <option>Calculus II</option>
                        </select>
                        <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                    </div>

                    <div class="form-group">
                        <label htmlFor="student2Science">Science</label>
                        <select id="student2Science" class="form-control" onChange={this.handleInputChange}>
                            <option disabled selected>Choose Science</option>
                            <option>Biology</option>
                            <option>Physics</option>
                            <option>Chemistry</option>
                            <option>Astronomy</option>
                        </select>
                        <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                    </div>

                    <div class="form-group">
                        <label htmlFor="student2SocialStudies">Social Studies</label>
                        <select id="student2SocialStudies" class="form-control" onChange={this.handleInputChange}>
                            <option disabled selected>Choose Social Studies</option>
                            <option>African History</option>
                            <option>African American History</option>
                            <option>Contemporary African Americans of Distinction</option>
                            <option>World History</option>
                        </select>
                        <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                    </div>

                    <div class="form-group">
                        <label htmlFor="student2English">English</label>
                        <select id="student2English" class="form-control" onChange={this.handleInputChange}>
                            <option disabled selected>Choose English</option>
                            <option>9th Grade English</option>
                            <option>10th Grade English</option>
                            <option>11th Grade English </option>
                            <option>12th Grade English</option>
                        </select>
                        <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                    </div>

                    <div class="form-group">
                        <label htmlFor="student2Elective">Elective</label>
                        <select id="student2Elective" class="form-control" onChange={this.handleInputChange}>
                            <option disabled selected>Choose Elective</option>
                            <option>Computer Science</option>
                            <option>Robotics</option>
                            <option>African American Literature</option>
                            <option>Stock Market Investing</option>
                        </select>
                        <span className="formErrors">{this.state.firstNameErrorMessage}</span>
                    </div>



                </div>}
                <button onClick={this.saveAndContinue} className="btn-lg btn-primary">Save and Continue</button>
            </div>
        );
    }
}

export default StudentCourses;
