// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: R$${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta}` + ` Saldo: R$${this.saldo.toFixed(2)}`
  );
};

function ContaCorrente(agencia, conta, saldo, limite) {
  // Conta.call = Chama a Superclass
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Método para por limite de saque
ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: R$${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

const contaCorrente = new ContaCorrente(11, 11, 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(1);

console.log();

function ContaPoupanca(agencia, conta, saldo) {
  // Conta.call = Chama a Superclass
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(10);
