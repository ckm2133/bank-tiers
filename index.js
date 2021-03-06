// setup server
const express = require('express');
const app     = express();
const port = process.env.port || 8080;

// setup directory used to serve static files
app.use(express.static('public'));

// setup data store
const low     = require('lowdb');
const fs      = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db      = low(adapter);

db.defaults({accounts: []}).write();

// allow Cross-Origin Resource Sharing (CORS)
var cors = require('cors');
app.use(cors());

// required data store structure
/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/

app.get('/account/create/:name/:email/:password', function (req, res) {

    // Create account route
    // return success or failure string

    if (db.get('accounts').find({email: req.params.email}).value()){
        res.send('Account already exists');
    }
    else{
        var account = {
            name        : req.params.name,
            email       : req.params.email,
            balance     : 0,
            password    : req.params.password,
            transactions: [{
                'action'      : 'create',
                'amount'      : 0,
                'timestamp'   : new Date().toDateString()
            }]
        };
    
        db.get('accounts').push(account).write();
        res.send(db.get('accounts').value());
        console.log('Account Created!')
        console.log(db.get('accounts').value());
    }
});

app.get('/account/login/:email/:password', function (req, res) {

    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null

    client = db.get('accounts').find({email: req.params.email}).value();

    if(client == null){
        console.log('Account not found.');
        res.send(null);
    }

    else if(client.password == req.params.password){

        res.send(db.get('accounts').find({email: req.params.email}).value());
        console.log('Login Successful');
        client.transactions.push({
                'action': 'login',
                'amount': 0,
                'timestamp': new Date().toDateString()
            });
        console.log(client);
    }
    else {
        console.log('Incorrect password entered.');
        res.send(null);
        client.transactions.push({
                'action': 'failed_login',
                'amount': 0,
                'timestamp': new Date().toDateString()
            });
        console.log(client);
    }
});

app.get('/account/get/:email', function (req, res) {

    // Return account based on email
    client = db.get('accounts').find({email: req.params.email}).value();

    if(client == null){
        console.log('Account not found.');
        res.send(null);
    }
    else {
        res.send(db.get('accounts').find({email: req.params.email}).value());
        console.log('Balance Check Successful');
    
        console.log(client);
    }
});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string

    client = db.get('accounts').find({email: req.params.email}).value();

    if(client == null){
        console.log('Account not found.');
        res.send(null);
    }

    client.transactions.push({
            'action': 'deposit',
            'amount': parseInt(req.params.amount),
            'timestamp': new Date().toDateString()
        });

    client.balance += parseInt(req.params.amount);


    res.send(db.get('accounts').find({email: req.params.email}).value());
    console.log('Deposit Successful');
    console.log(client);    
});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
    client = db.get('accounts').find({email: req.params.email}).value();
    
    console.log(client)
    if(client == null){
        console.log('Account not found.');
        res.send(null);
    }

    else {
        if (client.balance < req.params.amount){
            res.send('Overdrawn');
        }
            
        else{
            client.balance -= parseInt(req.params.amount)

            client.transactions.push({
                'action': 'withdrawal',
                'amount': parseInt(req.params.amount),
                'timestamp': new Date().toDateString()
            });

            res.send(db.get('accounts').find({email: req.params.email}).value());
            console.log('Withdraw Successful');
            console.log(client);  
        }
    }


});

app.get('/account/transactions/:email', function (req, res) {

    // Return all transactions for account
    client = db.get('accounts').find({email: req.params.email}).value();

    if(client == null){
        console.log('Account not found.');
        res.send(null);
    }

    else {
        res.send(db.get('accounts').find({email: req.params.email}).value());
        console.log('Transactioins Sent');
    
        console.log(client);
    }

});

app.get('/account/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
    res.send(db.get("accounts").value());
    console.log('Accounts Sent');

});

app.listen(port, function(){
    console.log('App running ');
});