import { transactionsArray } from "../data/transactions.js";
import { TransactionsModel } from "../models/Transactions.js";
import { accountArray } from "../data/account.js";
import { clientsArray } from "../data/clients.js";
import { AccountModel } from "../models/Account.js";

export default abstract class Account {
  #number: Number;
  #balance: number;
  #client: Number;

  constructor(client: Number) {

    if (this.searchClient(client)) {
      this.#client = client;
    } else {
      throw new Error("O usuario nao existe");
    }

    this.#number = this.generateId();
    this.#balance = 0;
  }

  generateId = (): Number => {
    return accountArray.length += 1;
  }

  searchClient = (clientId: Number): boolean => {
    return clientsArray.some(c => c.id === clientId);
  }

  searchAccount = (accountId: Number): AccountModel | undefined => {
    return accountArray.find(a => a.number === accountId);
  }

  deposit = (value: number): Number => {
    if (value > 0) {
      transactionsArray.push({
        id: transactionsArray.length += 1,
        accountNumber: this.#number,
        type: 'deposit',
        value,
        date: new Date()
      });

      return this.#balance += value;
    }

    throw new Error("Impossivel depositar valores menores ou igual a 0");
  }

  withdraw = (value: number): Number => {
    if (value <= this.#balance) {
      transactionsArray.push({
        id: transactionsArray.length + 1,
        accountNumber: this.#number,
        type: 'withdraw',
        value: value,
        date: new Date()
      })

      return this.#balance -= value;
    }

    throw new Error("Impossivel sacar um valor maior que o saldo");
  }

  transfer = (value: number, accountDestination: number): void => {
    const accountReceived = this.searchAccount(accountDestination);

    if (accountReceived) {
      if (value <= this.#balance) {
        this.#balance -= value;

        accountReceived.balance += value;
        
        transactionsArray.push({
          id: transactionsArray.length += 1,
          type: 'transfer',
          accountNumber: this.#number,
          whoReceived: accountDestination,
          value: value,
          date: new Date()
        });
      } else {
        throw new Error("Saldo insuficiente para transferir");
      }
    } else {
      throw new Error("A conta de destino nao foi achada");
    }
  }

  getBalance = (): number => {
    return this.#balance;
  }

  getExtract = (): TransactionsModel[] => {
    return transactionsArray.filter(t => t.accountNumber === this.#number);
  }
}