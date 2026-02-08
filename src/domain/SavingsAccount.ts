import Account from "./Account.js";

export default class SavingsAccount extends Account {
  applyYield = () => {
    const currentBalance = super.getBalance();
    const income = currentBalance * 0.005;

    super.setBalance(income);
  }
}