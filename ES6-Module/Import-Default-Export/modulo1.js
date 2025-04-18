// Para exportar as constantes variaveis
export const name = "Gil Andrey";
export const lastname = "Moraes";

// Export default, para manter o exportação padrão, "Não é necessario utilizar chaveamento para importar {}"
export default class Pessoa {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

// Séria um export default, ele receberia os valores passados no import sem chaveamento
// export default (x, y) => x * y
