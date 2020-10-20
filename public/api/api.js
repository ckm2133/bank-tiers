
function create() {
    // -------------------------------------
    //  Create user account on server
    // -------------------------------------    

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const account = {
        name,
        email,
        password
    };

   const url = '/account/create/'+name+'/'+email+'/'+password;
   superagent
      .get(url)
      .send(account)
      .end(function(err,res){
         if(err){
            console.log(err);
         }
         else{
            console.log(res);
            if(res.statusCode === 200){
                console.log('Response: Status Code 200. The HTTP 200 OK success status response code indicates that the HTTP request has succeeded')
                document.getElementById('status').innerHTML = `
                     <br>Success! Your account has been created.<br>
                  `;
            }
         }
      }); 
}

function login() {
    // -------------------------------------
    //  Confirm credentials on server
    // -------------------------------------

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const account = {
        name,
        email,
        password
    };

   const url = '/account/login/'+email+'/'+password;
   superagent
      .get(url)
      .send(account)
      .end(function(err,res){
         if(err){
            console.log("There was an error looking up the account.")
            document.getElementById('status').innerHTML = `
            <br>Attempt unsuccessful! Please try again.<br>
         `;
            console.log(err);
         }
         else{
            console.log(res);
            if(res.statusCode === 200 && res.body != null){
                console.log('Response: Status Code 200. The HTTP 200 OK success status response code indicates that the HTTP request has succeeded')
                document.getElementById('status').innerHTML = `
                     <br>Login successful!<br>
                  `;
            }
            else {
                document.getElementById('status').innerHTML = `
                <br>Attempt unsuccessful! Please try again.<br>`
            };
         }
      }); 
}

function deposit() {
    // -------------------------------------
    //  Deposit funds user funds on server
    // -------------------------------------

    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    
    const account = {
        email,
        amount
    };

   const url = '/account/deposit/'+email+'/'+amount;
   superagent
      .get(url)
      .send(account)
      .end(function(err,res){
         if(err){
            console.log("There was an error looking up the account.")
            document.getElementById('status').innerHTML = `
            <br>Attempt unsuccessful! Please try again.<br>
         `;
            console.log(err);
         }
         else{
            console.log(res);
            if(res.statusCode === 200){
                console.log('Response: Status Code 200. The HTTP 200 OK success status response code indicates that the HTTP request has succeeded')
                document.getElementById('status').innerHTML = `
                     <br>Deposit successful!<br>
                     You now have $${res.body.balance} in your account.
                  `;
            }
         }
      }); 
}

function withdraw() {
    // -------------------------------------
    //  Withdraw funds user funds on server
    // -------------------------------------

    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    
    const account = {
        email,
        amount
    };

   const url = '/account/withdraw/'+email+'/'+amount;
   superagent
      .get(url)
      .send(account)
      .end(function(err,res){
         if(err){
            console.log("There was an error looking up the account.")
            document.getElementById('status').innerHTML = `
            <br>Attempt unsuccessful! Please try again.<br>
         `;
            console.log(err);
         }
         else{
            console.log(res);
            if(res.statusCode === 200){
                console.log('Response: Status Code 200. The HTTP 200 OK success status response code indicates that the HTTP request has succeeded')
                document.getElementById('status').innerHTML = `
                     <br>Withdrawal successful!<br>
                     You now have $${res.body.balance} in your account.
                  `;
            }
         }
      }); 
}

function transactions() {
    // -------------------------------------
    //  Get all user transactions
    // -------------------------------------
    const email = document.getElementById('email').value;
    
    const account = {
        email
    };

   const url = '/account/transactions/'+email;
   superagent
      .get(url)
      .send(account)
      .end(function(err,res){
         if(err){
            console.log("There was an error looking up the account.")
            document.getElementById('status').innerHTML = `
            <br>Attempt unsuccessful! Please try again.<br>
         `;
            console.log(err);
         }
         else{
            console.log(res);

            html = '<div style="font-color: #ffc106!important;">';
            res.body.transactions.forEach(element => {                  
                html += `
                <ul class="list-group-item" style="font-color: #ffc106!important;">

                <li> Action: ${element.action} 
                    <ul>
                        <li> Amount: $${element.amount} </li>
                        <li>Time: ${element.timestamp} </li>
                    </ul>
                </li>
                </ul>
                    <br>
                `;
            })
            html += '</div">';
            document.getElementById('status').innerHTML = html;
         }
      }); 

}

function balance() {
    // -------------------------------------
    //  Get user balance
    // -------------------------------------

    const email = document.getElementById('email').value;
    
    const account = {
        email
    };

   const url = '/account/get/'+email;
   superagent
      .get(url)
      .send(account)
      .end(function(err,res){
         if(err){
            console.log("There was an error looking up the account.")
            document.getElementById('status').innerHTML = `
            <br>Attempt unsuccessful! Please try again.<br>
         `;
            console.log(err);
         }
         else{
            console.log(res);
            if(res.statusCode === 200){
                console.log('Response: Status Code 200. The HTTP 200 OK success status response code indicates that the HTTP request has succeeded')
                document.getElementById('status').innerHTML = `
                     <br>Current Balance: $${res.body.balance}<br>
                  `;
            }
            else {
                document.getElementById('status').innerHTML = `
                <br>Attempt unsuccessful! Please try again.<br>`
            };
         }
      }); 
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------

   const url = '/account/all';
   superagent
      .get(url)
      .end(function(err,res){
         if(err){
            console.log("There was an error looking up the account.")
            document.getElementById('status').innerHTML = `
            <br>Attempt unsuccessful! Please try again.<br>
         `;
            console.log(err);
         }
         else{
            console.log(res);

            html = '<div style="font-color: #ffc106!important;">';
            res.body.forEach(account => {                  
                html += `
                <ul class="list-group-item" style="font-color: #ffc106!important;">

                <li> Name: ${account.name} 
                    <ul>
                        <li> Email: $${account.email} </li>
                        <li> Balance: ${account.balance} </li>
                    </ul>
                </li>
                </ul>
                    <br>
                `;
            })
            html += '</div">';
            document.getElementById('status').innerHTML = html;
         }
      }); 
}

