var dal = require('../data-access/registration.js');

exports.addParent = async parentInfo =>{
    return dal.addParent(parentInfo);
}
