//BDD

function BankAccount(name, deposit){
  this.name = name;
  this.initialDeposit = deposit;
}



//$("").val()

//User Interface

$(document).ready(function() {
  $("#createAccount").click(function(){
    //click "CREATE ACCOUNT" ; resume after lunch
    var bank_name = $("#bankName").val();
    var initial_deposit = parseInt($("#bankInitialDeposit").val());

    var bankAccount = new BankAccount(bank_name, initial_deposit);
    $(".bankInfo").hide();
    $(".accountInfo").show();
    $("#accountBalanceForm").val(initial_deposit);
    $("#submitAmount").click(function(){
      BankAccount.prototype.depoMoney = function(){
      return this.initialDeposit + depositDollars;}
      var depositDollars = parseInt($("#bankDeposit").val());
      var withdrawDollars= parseInt($("#bankWithdraw").val());
      var accountBalanceTextform = parseInt($("#accountBalanceForm").val(bankAccount.depoMoney()));
        // parseInt$("#accountBalanceForm").val();
    });
  });
});
