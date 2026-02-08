import Bank from "./domain/Bank.js";
import Client from "./domain/Client.js";

const bank = new Bank();

const client = new Client("Samuel", "11407240960");

const cc = bank.createCurrentAccount(client);
const poup = bank.createSavingsAccount(client);

cc.deposit(1000);
cc.withdraw(100);

cc.transfer(200, poup);

poup.applyYield();

console.log(cc.getBalance());
console.log(poup.getBalance());
console.log(cc.getExtract());