
function create() {
   // -------------------------------------
   //  Create user account on server
   // -------------------------------------   

   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   if(name == '' || email == '' || password == ''){
      document.getElementById('status').innerHTML = `
      <br>Please enter your name, email, and password to create an account.<br>
   `;
   }
   else {
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
            console.log(res.text)
             if (res.text === "Account already exists"){
               console.log('Response: Status Code 200. The HTTP 200 OK success status response code indicates that the HTTP request has succeeded')
               document.getElementById('status').innerHTML = `
                    <br>This account already exists. Please try again.<br>
                 `;
             }
             else if(res.statusCode === 200){
                 console.log('Response: Status Code 200. The HTTP 200 OK success status response code indicates that the HTTP request has succeeded')
                 document.getElementById('status').innerHTML = `
                      <br>Success! Your account has been created.<br>
                   `;
             }
          }
       }); 
   };
}

function login() {
   // -------------------------------------
   //  Confirm credentials on server
   // -------------------------------------

   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   if(email == '' || password == ''){
      document.getElementById('status').innerHTML = `
      <br>Please enter your email and password to login.<br>
   `;
   }

   else {
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
                 <br>Attempt unsuccessful! User does not exist. Please try again.<br>`
             };
          }
       }); 
   };
}

function deposit() {
   // -------------------------------------
   //  Deposit funds user funds on server
   // -------------------------------------

   const email = document.getElementById('email').value;
   const amount = document.getElementById('amount').value;


   if(email == '' || amount == ''){
      document.getElementById('status').innerHTML = `
      <br>Please enter your email and the amount you would like to deposit.<br>
   `;
   }
   else {
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
             if(res.statusCode === 200 && res.body != null){
                 console.log('Response: Status Code 200. The HTTP 200 OK success status response code indicates that the HTTP request has succeeded')
                 document.getElementById('status').innerHTML = `
                      <br>Deposit successful!<br>
                      You now have $${res.body.balance} in your account.
                   `;
             }
             else {
               document.getElementById('status').innerHTML = `
               <br>Attempt unsuccessful! User does not exist. Please try again.<br>`
           };
          }
       }); 
   }
   

}

function withdraw() {
   // -------------------------------------
   //  Withdraw funds user funds on server
   // -------------------------------------

   const email = document.getElementById('email').value;
   const amount = document.getElementById('amount').value;

   if(email == '' || amount == ''){
      document.getElementById('status').innerHTML = `
      <br>Please enter your email and the amount you would like to withdraw.<br>
   `;
   }

   else {
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

             if (res.text === 'Overdrawn'){
               document.getElementById('status').innerHTML = `
               <br>Withdrawal failed!<br>
               You do not have enough in your account to make the requested withdrawal. You have $${res.body.balance} in your account.
            `;
             }
             else if(res.statusCode === 200 && res.body != null){
                 console.log('Response: Status Code 200. The HTTP 200 OK success status response code indicates that the HTTP request has succeeded')
                 document.getElementById('status').innerHTML = `
                      <br>Withdrawal successful!<br>
                      You now have $${res.body.balance} in your account.
                   `;
             }
             else {
              document.getElementById('status').innerHTML = `
              <br>Attempt unsuccessful! Please try again.<br>`
          };
          }
       }); 
   }
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

           if(res.statusCode === 200 && res.body != null){
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
           else {
            document.getElementById('status').innerHTML = `
            <br>Attempt unsuccessful! Please try again.<br>`
        };
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
           if(res.statusCode === 200 && res.body != null){
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
     .send()
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
           res.body.forEach(element => {              
               html += `
               <ul class="list-group-item" style="font-color: #ffc106!important;">

               <li> Name: ${element.name} 
                   <ul>
                       <li> Email: ${element.email} </li>
                       <li> Balance: $${element.balance} </li>
                       <li> Member since: ${element.transactions[0].timestamp} </li>
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

