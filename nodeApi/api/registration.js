var express = require('express');
var router = express.Router();
var regController = require('../controllers/registration');

router.post('/parent', async(req,res,next)=>{

    console.log('the parent data is ',req.body);

    regController.addParent(req.body);
    res.send('parent registered!');

});

module.exports = router;
