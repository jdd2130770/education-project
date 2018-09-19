import React, { Component } from 'react';
import './RegistrationForm.css';
import BasicInfo from './BasicInfo.js';
import StudentInfo from  './StudentInfo.js';
import StudentCourses from './StudentCourses';
import BillingInfo from './BillingInfo';
class Registration extends Component {


    constructor(props) {
        super(props);



        this.saveValues = this.saveValues.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);

        this.state = {
            fieldValues:{

            },
            step:1
        };
    }

    componentDidMount() {

    }


    render() {
        switch (this.state.step) {
            case 1:
                return <BasicInfo
                         fieldValues={this.state.fieldValues}
                         nextStep={this.nextStep}
                         saveValues={this.saveValues}
                      />
            case 2:
                return <StudentInfo
                         fieldValues={this.state.fieldValues}
                         nextStep={this.nextStep}
                         previousStep={this.previousStep}
                         saveValues={this.saveValues}
                   />
            case 3:
                return <StudentCourses
                    fieldValues={this.state.fieldValues}
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                    saveValues={this.saveValues}
                />
            case 4:
                <BillingInfo
                    fieldValues={this.state.fieldValues}
                    previousStep={this.previousStep}
                    saveValues={this.saveValues}
                />
        }
    }

    saveValues(fields)  {
            // Remember, `fieldValues` is set at the top of this file, we are simply appending
            // to and overriding keys in `fieldValues` with the `fields` with Object.assign
            // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
            console.log(this.state);
            var fieldValues = this.state.fieldValues;
             fieldValues = Object.assign({}, fieldValues, fields);
            this.setState({fieldValues:fieldValues},()=>{
                console.log('the field values are ',this.state.fieldValues);
            });

    }

    nextStep() {
        this.setState({
            step : this.state.step + 1
        })
    }

// Same as nextStep, but decrementing
    previousStep() {
        this.setState({
            step : this.state.step - 1
        })
    }
}

export default Registration;
