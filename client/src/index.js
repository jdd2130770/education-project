import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import RegistrationPage from './components/pages/RegistrationPage';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="">
        <RegistrationPage />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
