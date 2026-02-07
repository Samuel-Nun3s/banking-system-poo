import { TransactionsModel } from "./Transactions.js";

interface AccountModel {
  number: Number;
  balance: number;
  client: Number;
  transactionHistory: Array<TransactionsModel>
}

export { AccountModel };