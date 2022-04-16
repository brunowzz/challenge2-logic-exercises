// [ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10,
// e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

let number = Math.floor(Math.random() * 11)
let winner = Math.floor(Math.random() * 11)

if(number === winner) {
    console.log(`Você ganhou`)
} else {
    console.log(`Você perdeu, o número sorteado foi: ${winner} e o seu escolhido foi: ${number}`)
}