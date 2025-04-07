class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " já ligado");
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " já desligado");
      return;
    }
    this.ligado = false;
  }
}

// Para ter uma heranca com classes utiliza-se o extends
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    // super(Constructor da classe pai)
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, wifi) {
    super(nome), (this.wifi = wifi);
  }

  ligar() {
    console.log("Você alterou o metodo ligar!");
  }

  falaOi() {
    console.log("Oie");
  }
}

const s1 = new Smartphone("Samsung", "Preto", "Galaxy s23");
console.log(s1);

const t1 = new Tablet("iPad", true);

t1.ligar();
t1.falaOi();

console.log(t1);
