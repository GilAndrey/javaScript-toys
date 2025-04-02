/*
Vai entrar um CPF, e a conta tem que resultar nos dois ultimos números
Pegar os 9 digitos e multiplar com uma sequencia regressiva,
Pegar o total e dividir com % 
Se o número que sair da conta for maior que 9 é considerado 0


// 705.484.450-52 070.987.720-03
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2    
70  0   40  28  48  29  16  15  0

11 - (237 % 11) = 5 -> (Primeiro digito)

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x   
11  10  9   8   7   6   5   4   3   2x
77  0   45  32  56  24  20  20  0   10
 
11 - (284 % 11) = 2 -> (Primeiro digito)
 */

function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

// Função prototype para ver se o CPF é valido (ter certeza que ele não é null e tenha 11 números)
ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  // Para pegar o digito 2
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  // Função prototype, para pegar o primeiro digito do CPF
  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val);
    regressivo--;
    return ac;
  }, 0);

  // Essas linhas são para definir o digito 1, e para ver se ele é maior que 9
  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

// Função para evitar uma sequencia no CPF ex: 111.111.111-11, 222.222.222-22
ValidaCPF.prototype.isSequencia = function () {
  // Const sequencia, pega o tamanho do cpf e compara para ver se ele repete o mesmo valor 11 vezes
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF("705.484.450-52");

if (cpf.valida()) {
  console.log("CPF Válido");
} else {
  console.log("CPF Inválido");
}
