import Account from "./Account.js";

export default class CurrentAccount extends Account {
  withdraw(value: number): Number {
    const rate = 2.50;

    if (value > 0) {
      return super.withdraw(value + rate);
    }

    throw new Error("Erro ao sacar na conta corrente");
  }
}