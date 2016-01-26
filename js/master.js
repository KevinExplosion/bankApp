//BDD

function BankAccount(name, deposit){
  this.name = name;
  this.initialDeposit = deposit;
}



//User Interface

$(document).ready(function() {
  $("#createAccount").click(function(){
    //click "CREATE ACCOUNT" ; resume after lunch
    var bank_name = $("#bankName").val();
    var initial_deposit = $("#bankInitialDeposit").val();

    var bankAccount = new BankAccount(bank_name, initial_deposit);
  });
});
