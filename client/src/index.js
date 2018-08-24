import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import RegistrationForm from './components/RegistrationForm/RegistrationForm.js';
import NavMenu from './components/common/navMenu/NavMenu.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RegistrationForm />, document.getElementById('root'));
registerServiceWorker();
