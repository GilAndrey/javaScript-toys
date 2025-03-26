// Valor por referencia
// nulle fica de exemplo
const nulle = ["arrayNull", "ArrayNull", "ArrayNull"];
const nomes = ["Gil", "Andrey", "Moraes", "Maria", "Joana"];

// pop() = remove o ultimo elemento do Array -> Mais utilizado
const removido = nulle.pop();

// push() = Adiciona um elemento no Array - ultima posição -> Mais utilizado
nulle.push("Teste");
nulle.push("Da silva");

// shift() = remove o primeiro elemento do Array
const removido2 = nulle.shift();

// unshift() - Adiciona um elemeneto no Array - primeira posição
nulle.unshift("GilAndrey");
nulle.unshift("TestTest");

// retorna os elementos dos indices desejados
// nulle = nomes.slice(0, 3);

// split(), transforma a String em Array, separando pelo espaço " "
const splitString = "GIl Andrey Moraes";
const splitToArray = splitString.split(" ");

// join(), transforma o Array em String -> o contrario do split();
const joinArray = ["Gil", "Andrey", "Moraes"];
const joinToString = joinArray.join(" ");

// splice() ->
//                      -5      -4       -3         -2        -1
//                       0       1        2          3         4
const nomesSplice = ["Maria", "João", "Eduardo", "Gabriel", "Gil"];

// Simulando o pop usando splice -> Elemento 3 e 1 item removido e está substituindo por a String colocada = "Luiz";
// splice.splice(indice, delete, elem1, elem2, elem3) -> exemplo de como funciona
const spliceRemovidos = nomesSplice.splice(3, 1, "Luiz");
const spliceAdicionados = nomesSplice.splice(5, 0, "Teste");

// Concatenando Arrays - Utilizando .concat();
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 9], "Gil");

const a3 = [...a1, "Gil", ...a2, ...[7, 8, 9]];
console.log(a3);
