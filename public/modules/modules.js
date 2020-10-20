var ui = {};

ui.navigation = `
    <!-- ------------- YOUR CODE: Navigation UI ------------- --> 
`;

ui.createAccount = `
    <!-- ------------- YOUR CODE: Create Account UI ------------- --> 
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header"><h3>Create Account</h3></div>
    <div class="card-body">
      <h5 class="card-title">Enter your information to create an account.</h5>
      <p class="card-text">Name</p>
      <input class = "form-control mr-sm-2" id='name' type="text" placeholder="Enter name">
        <br>
      <p class="card-text">Email address</p>
      <input class = "form-control mr-sm-2" id='email' type="text" placeholder="Enter email">
        <br>
      <p class="card-text">Password</p>
      <input class = "form-control mr-sm-2" id='password' type="text" placeholder="Enter password">

    <br>
      <button class="btn my-2 my-sm-0" type="submit" onclick = "create()">Create Account</button>
      <br>
      <p class="card-text" id = 'status'></p>
    </div>
  </div>
`;

ui.login = `
    <!-- ------------- YOUR CODE: Login UI ------------- --> 
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
    <div class="card-header"><h3>Login</h3></div>
    <div class="card-body">
      <h5 class="card-title">Enter your information to create an account.</h5>
      <p class="card-text">Email address</p>
      <input class = "form-control mr-sm-2" id='email' type="text" placeholder="Enter email">
        <br>
      <p class="card-text">Password</p>
      <input class = "form-control mr-sm-2" id='password' type="text" placeholder="Enter password">

    <br>
      <button class="btn my-2 my-sm-0" type="submit" onclick = "login()">Login</button>
      <br>
      <p class="card-text" id = 'status'></p>
    </div>
  </div>
`;

ui.deposit = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- -->
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header"><h3>Deposit</h3></div>
    <div class="card-body">
      <h5 class="card-title">Enter the amount you would like to deposit.</h5>
      <p class="card-text">Email address</p>
      <input class = "form-control mr-sm-2" id='email' type="text" placeholder="Enter email">
        <br>
      <p class="card-text">Amount</p>
      <input class = "form-control mr-sm-2" id='amount' type="number" placeholder="Enter deposit amount">

    <br>
      <button class="btn my-2 my-sm-0" type="submit" onclick = "deposit()">Deposit</button>
      <br>
      <p class="card-text" id = 'status'></p>
    </div>
  </div> 
`;

ui.withdraw = `
    <!-- ------------- YOUR CODE: Withdraw UI ------------- -->
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header"><h3>Withdraw</h3></div>
    <div class="card-body">
      <h5 class="card-title">Enter the amount you would like to withdraw.</h5>
      <p class="card-text">Email address</p>
      <input class = "form-control mr-sm-2" id='email' type="text" placeholder="Enter email">
        <br>
      <p class="card-text">Amount</p>
      <input class = "form-control mr-sm-2" id='amount' type="number" placeholder="Enter withdraw amount">

    <br>
      <button class="btn my-2 my-sm-0" type="submit" onclick = "withdraw()">Withdraw</button>
      <br>
      <p class="card-text" id = 'status'></p>
    </div>
  </div> 
`;

ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> 
    <div class="card bg-warning mb-3" style="max-width: 18rem;">
    <div class="card-header"><h3>Transactions</h3></div>
    <div class="card-body">
      <h5 class="card-title">Enter your email to see a list of your recent transactions.</h5>
      <p class="card-text">Email address</p>
      <input class = "form-control mr-sm-2" id='email' type="text" placeholder="Enter email">
        <br>
      <button class="btn my-2 my-sm-0" type="submit" onclick = "transactions()">See history</button>
      <br>
      <br>
      <p class="card-text" id = 'status'></p>
    </div>
  </div> 
`;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- --> 
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header"><h3>Balance</h3></div>
    <div class="card-body">
      <h5 class="card-title">Enter your email to see your current balance.</h5>
      <p class="card-text">Email address</p>
      <input class = "form-control mr-sm-2" id='email' type="text" placeholder="Enter email">
        <br>
      <button class="btn my-2 my-sm-0" type="submit" onclick = "balance()">See balance</button>
      <br>
      <p class="card-text" id = 'status'></p>
    </div>
  </div> 
`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
  <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header"><h3>BadBank Landing Module</h3></div>
  <div class="card-body">
    <h5 class="card-title">Welcome to the bank!</h5>
    <p class="card-text">You can move around using the navigation bar at the top.</p>
    <svg width="10em" height="10em" viewBox="0 0 16 16" class="bi bi-cash-stack" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z"/>
    <path fill-rule="evenodd" d="M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z"/>
    <path d="M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
  </svg>
  </div>
</div> 
`;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- --> 
    <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header"><h3>All Accounts</h3></div>
    <div class="card-body">
      <h5 class="card-title">Click the button below to retrieve account data for all accounts.</h5>
        <br>
      <button class="btn my-2 my-sm-0" type="submit" onclick = "allData()">Get Accounts</button>
      <br>
      <p class="card-text" id = 'status'></p>
    </div>
  </div> 
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
