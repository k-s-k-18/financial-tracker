require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const authRouter = require('./controllers/AuthControllers');
const plaidRouter = require('./controllers/PlaidControllers');

app.use(express.json());

//Request Log Middleware
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.method,' ',req.path);
    next();
});

app.use('/auth',authRouter);
app.use('/plaid',plaidRouter);

mongoose.connect(process.env.DB_CONN_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('Listening on Port ', process.env.PORT);
    });
})
.catch((err)=>{
    console.log(err);
});
