var express = require('express');
var router = express.Router();
var regController = require('../controllers/registration');

router.post('/parent', async(req,res,next)=>{

    console.log('the parent data is ',req.body);

    regController.addParent(req.body);
    res.send('parent registered!');

});

router.post('/submitRegistrationForm', async(req,res,next)=>{

    console.log('the form data is  ',req.body);

    regController.submitRegistrationForm(req.body);
    res.send('form submitted');

});

module.exports = router;
