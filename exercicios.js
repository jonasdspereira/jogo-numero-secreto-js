// // 1
console.log("Seja bem vindo(a)!");

// // 2

let nome = "Jonas";

console.log(`Seja bem vindo(a), ${nome}`);

// // 3

let nome2 = "Jonas";

alert(`Olá, ${nome2}`);

// // 4

let linguagem = prompt("Qual linguagem de programação voce gosta?");

console.log(linguagem);

// 5

let valor1 = 3;
let valor2 = 2;

let resultado = valor1 + valor2;

console.log(`a soma entre ${valor1} e ${valor2} é igual a ${resultado}`);

// 6

let valor1 = 3;
let valor2 = 2;

let resultado = valor1 - valor2;

console.log(`a diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

// 7

let idade = prompt("Digite sua idade");

if (idade > 18) {
  alert("Maior de idade");
} else {
  alert("Menor de idade");
}

// 8

let numero = prompt("Digite um numero");

if (numero < 0) {
  alert("negativo");
} else {
  alert("positivo");
}

// 9

let count = 1;

while (count <= 10) {
  console.log(count);
  count++;
}

// 10

let nota = 5;

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// 11, 12 e 13

let aleatorio = parseInt(Math.random() * 1000 + 1);

alert(aleatorio);
