import React, { Component } from 'react';
import './RegistrationForm.css';
import validator from 'validator';
import FormValidator from "../../validation/validation_class";

class StudentCourses extends Component {

    constructor(props) {
        super(props);


        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveAndContinue = this.saveAndContinue.bind(this);
        this.getValidationRules = this.getValidationRules.bind(this);

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

        //check to see if second student has a name
        var name = this.props.fieldValues.students[1].studentFirstName
        if(name !==''){
            console.log('there is a second student with name ',name);
            this.setState({'showStudent2':true});
        }
        else{
            console.log('there is not second student');
            this.setState({'showStudent2':false});
        }
    }

    handleInputChange(e){
        this.setState({[e.target.id]: e.target.value});
    }
    saveAndContinue (e){
        e.preventDefault();

        var coursesObj ={
            'studentCourses':[]
        }



        var student1Courses ={
            'math':this.state.student1Math,
            'science':this.state.student1Science,
            'english':this.state.student1English,
            'socialStudies':this.state.student1SocialStudies,
            'elective':this.state.student1Elective
        }

        var student2Courses = {
            'math':this.state.student2Math,
            'science':this.state.student2Science,
            'english':this.state.student2English,
            'socialStudies':this.state.student2SocialStudies,
            'elective':this.state.student2Elective
        }

        coursesObj.studentCourses.push(student1Courses);
        coursesObj.studentCourses.push(student2Courses);

        var student1ValidationRules = this.getValidationRules(1);
        var student2ValidationRules = this.getValidationRules(2);

        var student1Validator = new FormValidator(student1ValidationRules);
        var student1Validation = student1Validator.validate(this.state);

        var student2Validator = new FormValidator(student2ValidationRules);
        var student2Validation = student2Validator.validate(this.state);

        //if there is no 2nd student, automatically set the validation to true

        if(this.state.showStudent2==false){
            student2Validation.isValid = true;
        }

        if(student1Validation.isValid && student2Validation.isValid){
            this.props.saveValues(coursesObj);
            this.props.nextStep();
        }

        else {

            var params = this.state;
            for(var field in params){
                console.log('the field is ',field);
                var fieldErrorLabel = field + 'ErrorMessage';

                if(student1Validation[field]){
                    this.setState({
                        [fieldErrorLabel] : student1Validation[field].message
                    });
                }

                if(student2Validation[field]){
                    this.setState({
                        [fieldErrorLabel] : student2Validation[field].message
                    });
                }
            }
        }

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
                    <span className="formErrors">{this.state.student1MathErrorMessage}</span>
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
                    <span className="formErrors">{this.state.student1ScienceErrorMessage}</span>
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
                    <span className="formErrors">{this.state.student1SocialStudiesErrorMessage}</span>
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
                    <span className="formErrors">{this.state.student1EnglishErrorMessage}</span>
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
                    <span className="formErrors">{this.state.student1ElectiveErrorMessage}</span>
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
                        <span className="formErrors">{this.state.student2MathErrorMessage}</span>
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
                        <span className="formErrors">{this.state.student2ScienceErrorMessage}</span>
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
                        <span className="formErrors">{this.state.student2SocialStudiesErrorMessage}</span>
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
                        <span className="formErrors">{this.state.student2EnglishErrorMessage}</span>
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
                        <span className="formErrors">{this.state.student2ElectiveErrorMessage}</span>
                    </div>



                </div>}
                <button onClick={this.saveAndContinue} className="btn-lg btn-primary">Save and Continue</button>
            </div>
        );
    }

    getValidationRules(studentNum){


        var mathField = 'student'+studentNum+'Math';
        var scienceField = 'student'+studentNum+'Science';
        var englishField = 'student'+studentNum+'English';
        var socialStudiesField = 'student'+studentNum+'SocialStudies';
        var electiveField = 'student'+studentNum+'Elective';

        var validationRules = [
            {
                field:mathField,
                method:validator.isEmpty,
                validWhen:false,
                message:'Field required'
            },
            {
                field:scienceField,
                method:validator.isEmpty,
                validWhen:false,
                message:'Field required'
            },
            {
                field:englishField,
                method:validator.isEmpty,
                validWhen:false,
                message:'Field required'
            },
            {
                field:socialStudiesField,
                method:validator.isEmpty,
                validWhen:false,
                message:'Field required'
            },
            {
                field:electiveField,
                method:validator.isEmpty,
                validWhen:false,
                message:'Field required'
            }
        ];

        return validationRules;
    }



}

export default StudentCourses;
