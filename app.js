console.log("Alerta de boas vindas");
alert("Boas vindas ao Jogo do número secreto!");

let numeroSecreto = parseInt(Math.random() * 100 + 1);

let chute;

let tentativas = 1;

// Enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número de 1 e 100");

  // Se o numero for igual ao número secreto
  if (chute == numeroSecreto) {
    // Finaliza a condição
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O numero secreto é maior que ${chute}`);
    }
  }
  tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Isso aí, você descobriu o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}. `
);

// if (tentativas > 1) {
//   alert(
//     `Isso aí, você descobriu o número secreto ${numeroSecreto}, com ${tentativas} tentativas. `
//   );
// } else {
//   alert(
//     `Isso aí, você descobriu o número secreto ${numeroSecreto}, com ${tentativas} tentativa. `
//   );
// }
