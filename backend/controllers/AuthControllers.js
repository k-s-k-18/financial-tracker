const express = require('express');
const User = require('../models/UserSchema');

const router = express.Router();

router.post('/login',(req,res)=>{
    res.status(200).send(req.body);
});

router.post('/sign-up', async (req,res)=>{
    const user = req.body;

    const result = await User.create(user);

    res.status(200).send(result);
})

module.exports = router;