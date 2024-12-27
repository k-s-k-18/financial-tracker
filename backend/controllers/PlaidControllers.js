const express = require('express');
const router = express.Router();

const create_link_config = {
    'client_id':process.env.PLAID_CLIENT_ID,
    'secret':process.env.PLAID_SECRET_KEY,
    'client_name':'Financial Tracker',
    'language':'en',
    'country_codes':['US'],
    'user':{
        'client_user_id':'500825003',
    },
    'products':['transactions'],
    'redirect_uri':'http://localhost:3000/plaid/redirect_uri',
    "account_filters": {
        "depository": {
        "account_subtypes": ["checking", "savings"]
        },
        "credit": {
        "account_subtypes": ["credit card"]
        }
    }
};

const itemConfiguration = {
    'access_token':null,
    'item_id':null
}

const plaid_uri='https://sandbox.plaid.com/';

router.get('/create_link',(req,res)=>{

        fetch(plaid_uri+'link/token/create',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(create_link_config)
        }).then((response)=>{
            if(!response.ok){
                throw Error('HTTP error!:',response.status);
            }
            return response.json();
        }).then((data)=>{
            console.log(data);
            res.send(data);
        }).catch((err)=>{
            console.log(err);
        });

});

router.post('/public_token_exchange',(req,res)=>{
    console.log(req.body.public_token);
    fetch(plaid_uri+'item/public_token/exchange',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            'client_id':process.env.PLAID_CLIENT_ID,
            'secret':process.env.PLAID_SECRET_KEY,
            'public_token':req.body.public_token
        }),
    }).then((response)=>{return response.json()}).then((data)=>{
        //console.log(data);
        itemConfiguration.access_token=data.access_token,
        itemConfiguration.item_id=data.item_id
        console.log(itemConfiguration)
        getAccounts();
    }).catch(err=>console.log(err));
})

function getAccounts(){
    fetch(plaid_uri+'accounts/get',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            client_id:process.env.PLAID_CLIENT_ID,
            secret:process.env.PLAID_SECRET_KEY,
            access_token:itemConfiguration.access_token
        })
    }).then((response)=>{
        return response.json()
    }).then((data)=>console.log(data));

}

router.get('/redirect_uri',(req,res)=>{

});

module.exports = router;
