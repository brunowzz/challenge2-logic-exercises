// [ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

let note = Math.floor(Math.random() * 11)

switch (note) {
    case 0:
        console.log(`Você errou todas as questões`)
        break;
    case 1:
        console.log(`Você acertou apenas 1 questão`)
        break;
    case 2:
        console.log(`Você acertou apenas 2 questões`)
        break;
    case 3:
        console.log(`Você acertou apenas 3 questões`)
        break;
    case 4:
        console.log(`Você acertou apenas 4 questões`)
        break;
    case 5:
        console.log(`Você acertou apenas 5 questões`)
        break;
    case 6:
        console.log(`Você acertou apenas 6 questões`)
        break;
    case 7:
        console.log(`Você acertou apenas 7 questões`)
        break;
    case 8:
        console.log(`Você acertou apenas 8 questões`)
        break;
    case 9:
        console.log(`Você acertou apenas 9 questões`)
        break;
    case 10:
        console.log(`Parabéns você acertou todas as questões`)
        break;

    default:
        break;
}