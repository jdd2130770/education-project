import React, { Component } from 'react';

import './RegistrationPage.css';

import Registration from '../RegistrationForm/Registration';

class RegistrationPage extends Component {


    state = {
        response: 'loading....'
    };

    componentDidMount() {

    }




    render() {
    return (
      <div className="registrationPage">
          <div className="mainContent">
              <Registration />
          </div>
      </div>
    );
  }
}

export default RegistrationPage;
