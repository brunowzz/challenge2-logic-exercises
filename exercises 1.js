// [ ] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor, o número é igual"

let compare = Math.floor(Math.random() * 101)

 if(compare > 10) {
     console.log(`O número ${compare} é maior do que 10`)
} else if(compare < 10) {
     console.log(`O númuero ${compare} é menor do que 10`)
} else {
     console.log(`O número ${compare} é igual a 10`)
} 
