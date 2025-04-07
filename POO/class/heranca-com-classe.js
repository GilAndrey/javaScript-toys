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
// console.log(s1);

const t1 = new Tablet("iPad", true);

// t1.ligar();
// t1.falaOi();

// console.log(t1);

// Metodos de instacia e estaticos
// Utilizando instacia
class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }

  diminiurVolume() {
    this.volume -= 2;
  }

  // Metodo de estático
  static soma(x, y) {
    return x + y;
  }
}

const controle1 = new ControleRemoto("lg");

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

console.log(ControleRemoto.soma(2, 5));

// A diferença do metado estatico para o metodo da instancia
// Metodo estatico - pertence a propria classe. Então para utilizar precisa ser utilizando diretamente a classe
// Pelo contrario a instancia já pode ser utilizada Open source
