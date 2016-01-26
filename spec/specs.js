
// Example Spec below:

// describe('functionname', function(){
//   it('first spec here...', function(){
//     expect(functionname(parameter)).to.equal('placeholder');
//   });
// });

describe("bankAccount", function(){
  it("will return true if bank account object parameters are met", function() {
    var newBankAccount = new bankAccount("Bob", "checking", 500)
      excpet(bankAccount.name).to.equal("Bob");
      excpet(bankAccount.type).to.equal("checking");
      expect(bankAccount.initialDeposit).to.equal(500);
  });
});
