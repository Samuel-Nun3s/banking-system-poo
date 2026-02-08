import { AccountModel } from "../models/Account.js";
import { ClientModel } from "../models/Client.js";
import Account from "./Account.js";
import CurrentAccount from "./CurrentAccount.js";
import SavingsAccount from "./SavingsAccount.js";

export default class Bank {
  listAccounts: Array<Account>;

  constructor() {
    this.listAccounts = [];
  }

  createCurrentAccount(client: ClientModel) {
    const account = new CurrentAccount(client.id, this.generateId());

    this.listAccounts.push(account);

    return account;
  }

  createSavingsAccount(client: ClientModel) {
    const account = new SavingsAccount(client.id, this.generateId());

    this.listAccounts.push(account);

    return account;
  }

  generateId(): Number {
    return this.listAccounts.length + 1;
  }

  getAccount(id: Number) {
    const account = this.listAccounts.find(a => a.getNumber() === id);

    if (account) {
      return account;
    }

    throw new Error("Conta nao encontrada");
  }

  getListAccounts() {
    return this.listAccounts;
  }
}