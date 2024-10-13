function Ranking(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas; 
    let nivel = ""; 

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

let jogador = Ranking(65, 30); 

console.log("O Herói tem de saldo de vitórias de " + jogador.saldoVitorias + " está no nível " + jogador.nivel);

