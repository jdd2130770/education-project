var dal = require('../data-access/registration.js');

exports.addParent = async parentInfo =>{
    return dal.addParent(parentInfo);
}

exports.submitRegistrationForm = async data =>{
    return dal.submitRegistrationForm(data);
}
