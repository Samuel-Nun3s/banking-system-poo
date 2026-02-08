# Banking System POO

Sistema bancário desenvolvido em TypeScript aplicando conceitos de Programação Orientada a Objetos.

## Sobre o Projeto

Este projeto foi desenvolvido como exercício prático para consolidar conceitos fundamentais de POO:

- **Encapsulamento** - Atributos privados com `#` e acesso controlado via métodos
- **Herança** - Classes `CurrentAccount` e `SavingsAccount` estendem `Account`
- **Abstração** - Classe `Account` abstrata define contrato para contas
- **Polimorfismo** - Sobrescrita do método `withdraw` na `CurrentAccount`

## Estrutura do Projeto

```
src/
├── domain/
│   ├── Account.ts        # Classe abstrata base
│   ├── CurrentAccount.ts # Conta corrente (taxa de saque)
│   ├── SavingsAccount.ts # Conta poupança (rendimento)
│   ├── Client.ts         # Cliente
│   └── Bank.ts           # Gerenciador de contas
├── models/
│   ├── Account.ts        # Interface AccountModel
│   ├── Client.ts         # Interface ClientModel
│   └── Transactions.ts   # Tipos de transações
├── data/
│   └── clients.ts        # Armazenamento de clientes
└── index.ts              # Ponto de entrada
```

## Funcionalidades

### Cliente
- Validação de nome (mínimo 3 caracteres)
- Validação de CPF (não pode ser vazio)

### Conta (Base)
- Depósito com validação de valor positivo
- Saque com validação de saldo
- Transferência entre contas
- Histórico de transações
- Consulta de saldo e extrato

### Conta Corrente
- Taxa de R$ 2,50 por saque

### Conta Poupança
- Rendimento de 0.5% sobre o saldo

### Banco
- Criação de contas corrente e poupança
- Busca de conta por número
- Listagem de contas

## Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Compilar para JavaScript
npm run build

# Executar versão compilada
npm start
```

## Exemplo de Uso

```typescript
import Bank from "./domain/Bank.js";
import Client from "./domain/Client.js";

const bank = new Bank();
const client = new Client("Samuel", "12345678900");

const cc = bank.createCurrentAccount(client);
const poup = bank.createSavingsAccount(client);

cc.deposit(1000);
cc.withdraw(100);        // Desconta R$ 102,50 (taxa)
cc.transfer(200, poup);

poup.applyYield();       // Aplica 0.5% de rendimento

console.log(cc.getBalance());
console.log(poup.getBalance());
console.log(cc.getExtract());
```

## Tecnologias

- Node.js
- TypeScript
- TSX (execução de TypeScript)

## Licencia

ISC
