/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) === true && amount > 0) {
    var newTransactionEntry = new Transaction('deposit', amount);
    this.transactions.push(newTransactionEntry);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) === true && amount > 0) {
    var newTransactionEntry = new Transaction('withdrawal', amount);
    this.transactions.push(newTransactionEntry);
    return true;
  } else {
    return false;
  }
};
Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
