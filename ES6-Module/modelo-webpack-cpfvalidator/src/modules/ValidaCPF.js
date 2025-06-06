export default class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  // Para invalidar as sequencias
  isSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  // Remove os 2 ultimos digitos do cpf
  geraNovoCpf() {
    const cpfSemDigito = this.cpfLimpo.slice(0, -2);
    1;
    const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
    this.novoCPF = cpfSemDigito + digito1 + digito2;
  }

  // Metodo estatico dentro da classe (Não foi utilizado o this. então pode ser considerado static)
  static geraDigito(cpfSemDigito) {
    let total = 0;
    let reverso = cpfSemDigito.length + 1;

    for (let stringNum of cpfSemDigito) {
      //   console.log(stringNum, reverso);
      total += reverso * Number(stringNum);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    this.geraNovoCpf();

    return this.novoCPF === this.cpfLimpo;
  }
}

console.log("Estou aki");
