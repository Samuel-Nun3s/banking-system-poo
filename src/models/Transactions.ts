interface DepositModel {
  id: Number;
  accountNumber: Number;
  type: "deposit",
  value: number;
  date: Date;
}

interface WithdrawModel {
  id: Number;
  accountNumber: Number;
  type: "withdraw";
  value: number;
  date: Date;
}

interface TransferModel {
  id: Number;
  type: "transfer";
  accountNumber: Number;
  whoReceived: Number;
  value: Number;
  date: Date;
}

type TransactionsModel = DepositModel | WithdrawModel | TransferModel;

export { TransactionsModel };