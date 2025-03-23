function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode !== 13) return;
      this.realizaConta();
    });
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) return this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) return this.clear();
      if (el.classList.contains("btn-del")) return this.del();
      if (el.classList.contains("btn-eq")) return this.realizaConta();
    });
  };

  // eval();

  this.realizaConta = function () {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert("Conta inválida!!");
        return;
      }

      this.display.value = conta;
    } catch (e) {
      alert("Função inválida!");
      return;
    }
  };

  this.del = () => (this.display.value = this.display.value.slice(0, -1));

  this.addNumDisplay = (el) => (this.display.value += el.innerText);

  this.clear = () => (this.display.value = "");
}

const calculadora = new Calculadora();
calculadora.inicia();
