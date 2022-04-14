// [ ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

const number = 22

if(number % 2 === 0) {
    
    if(number % 5 === 0)
    console.log(`O número ${number} é par e divisível por 5`)
   
    else
    console.log(`O número ${number} é par`)

} else {
    
    for(let i = 0; number < i; i++)
    if(number % i === 0) {
        console.log(`O número é impar, porém não é primo`)
    break    
    } else {
        if(i === number -1) 
        console.log(`O número é impar`)
    }

}