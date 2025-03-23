function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener("keypress", (e) => {
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

  /*
   * eval(); -> Codigo que possui a função matématica de fazer os Calculos
   * Não recomendavel utilizar esse código, pode ser bem maléfico para o código "Parte de fora"
   * Recomendavel criar a própria função Matématica para ter o melhor desempenho da Calculadora.
   */

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

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => (this.display.value = "");
}

const calculadora = new Calculadora();
calculadora.inicia();
