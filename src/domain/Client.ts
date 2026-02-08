import { clientsArray } from "../data/clients.js";

export default class Client {
  id: number;
  name: String;
  cpf: String;

  constructor(name: string, cpf: string) {
    if (name.length > 3) {
      this.name = name;
    } else {
      throw new Error("O nome deve ter no minimo 3 caracteres!");
    }

    if (cpf.length > 0) {
      this.cpf = cpf;
    } else {
      throw new Error("O campo CPF nao pode ser vazio!");
    }

    this.id = clientsArray.length + 1;

    this.createClient(this.id, this.name, this.cpf);
  }

  createClient = (id: Number, name: String, cpf: String): void => {
    clientsArray.push({ id, name, cpf });
  }
}