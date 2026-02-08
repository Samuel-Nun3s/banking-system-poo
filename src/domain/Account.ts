import { clientsArray } from "../data/clients.js";

import { TransactionsModel } from "../models/Transactions.js";
import { AccountModel } from "../models/Account.js";

export default abstract class Account {
  #number: Number;
  #balance: number;
  #client: Number;
  #transactionHistory: Array<TransactionsModel>;

  constructor(client: Number, id: Number) {

    if (this.searchClient(client)) {
      this.#client = client;
    } else {
      throw new Error("O usuario nao existe");
    }

    this.#number = id;
    this.#balance = 0;
    this.#transactionHistory = []
  }

  searchClient = (clientId: Number): boolean => {
    return clientsArray.some(c => c.id === clientId);
  }

  deposit = (value: number): Number => {
    if (value > 0) {
      this.#transactionHistory.push({
        id: this.#transactionHistory.length + 1,
        accountNumber: this.#number,
        type: 'deposit',
        value,
        date: new Date()
      });

      return this.#balance += value;
    }

    throw new Error("Impossivel depositar valores menores ou igual a 0");
  }

  withdraw(value: number): Number {
    if (value <= this.#balance) {
      this.#transactionHistory.push({
        id: this.#transactionHistory.length + 1,
        accountNumber: this.#number,
        type: 'withdraw',
        value: value,
        date: new Date()
      })

      return this.#balance -= value;
    }

    throw new Error("Impossivel sacar um valor maior que o saldo");
  }

  transfer = (value: number, accountDestination: Account): void => {
    const accountReceived = accountDestination;

    if (accountReceived) {
      if (value <= this.#balance) {
        this.#balance -= value;

        accountReceived.setBalance(value);
        
        this.#transactionHistory.push({
          id: this.#transactionHistory.length + 1,
          type: 'transfer',
          accountNumber: this.#number,
          whoReceived: accountDestination.getNumber(),
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

  getBalance(): number {
    return this.#balance;
  }

  protected setBalance(value: number): number {
    return this.#balance += value;
  }

  getExtract = (): TransactionsModel[] => {
    return this.#transactionHistory;
  }

  getNumber = (): Number => {
    return this.#number;
  }
}