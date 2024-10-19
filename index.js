//definindo a função para calcular o saldo e nivel do heroi
function calcularSaldoNivel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  //estrutura de decisões conforme o saldo de vitorias
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }
  //exibindo resultado no terminal
  console.log(
    "O Herói tem " + saldoVitorias + " vitorias e está no nivel " + nivel
  );
}
//definindo valores
let vitorias = 70;
let derrotas = 15;
calcularSaldoNivel(vitorias, derrotas);
