
// Example Spec below:

// describe('functionname', function(){
//   it('first spec here...', function(){
//     expect(functionname(parameter)).to.equal('placeholder');
//   });
// });

describe("bankAccount", function(){
  it("will return true if bank account object parameters are met", function() {
    var newBankAccount = new BankAccount("Bob", 500);
      expect(newBankAccount.name).to.equal("Bob");
      expect(newBankAccount.initialDeposit).to.equal(500);
  });
});
