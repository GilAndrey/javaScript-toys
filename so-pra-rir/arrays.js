// Valor por referencia
// nulle fica de exemplo
const nulle = ["arrayNull", "ArrayNull", "ArrayNull"];
const nomes = ["Gil", "Andrey", "Moraes", "Maria", "Joana"];

// pop() = remove o ultimo elemento do Array -> Mais utilizado
const removido = nulle.pop();

// shift() = remove o primeiro elemento do Array
const removido2 = nulle.shift();

// push() = Adiciona um elemento no Array - ultima posição -> Mais utilizado
nulle.push("Teste");
nulle.push("Da silva");

// unshift() - Adiciona um elemeneto no Array - primeira posição
nulle.unshift("GilAndrey");
nulle.unshift("TestTest");

// retorna os elementos dos indices desejados
// nulle = nomes.slice(0, 3);

// split(), transforma a String em Array, separando pelo espaço " "
const nomeTestxxx = "GIl Andrey Moraes";
const nomeArrayxxx = nomeTestxxx.split(" ");

// join(), transforma o Array em String -> o contrario do split();
const nomeText = ["Gil", "Andrey", "Moraes"];
const nomeJoin = nomeText.join(" ");
console.log(nomeJoin);
