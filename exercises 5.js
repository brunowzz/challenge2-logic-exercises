// [ ] Crie 5 objetos nesse formato
// { nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
// Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.
const person1 = {
    name: `Bruno`,
    age: `16`,
    sex: `male`,
    profession: `developer`,
    nationality: `Brazilian`
}
const person2 = {
    name: `Gabrielly `,
    age: `16`,
    sex: `female`,
    profession: `Student`,
    nationality: `Brazilian`
}
const person3 = {
    name: `Joãozinho`,
    age: `21`,
    sex: `male`,
    profession: `Driver`,
    nationality: `Brazilian`
}
const person4 = {
    name: `Esteban`,
    age: `35`,
    sex: `male`,
    profession: `Teacher`,
    nationality: `Puerto rican`
}
const person5 = {
    name: `Hellen`,
    age: `22`,
    sex: `female`,
    profession: `Housewife`,
    nationality: `Brazilian`
}
 
 if(person1.age >= 18 && person1.nationality === `Brazilian`) {
     console.log(`Parabéns ${person1.name} você foi aprovado com sucesso.`)
 } else {
     console.log(`Infelizmente ${person1.name} você não foi aprovado.`)
 }
 if(person2.age >= 18 && person2.nationality === `Brazilian`) {
     console.log(`Parabéns ${person2.name} você foi aprovado com sucesso.`)
 } else {
     console.log(`Infelizmente ${person2.name} você não foi aprovado.`)
 }
 if(person3.age >= 18 && person3.nationality === `Brazilian`) {
     console.log(`Parabéns ${person3.name} você foi aprovado com sucesso.`)
 } else {
     console.log(`Infelizmente ${person3.name} você não foi aprovado.`)
 }
 if(person4.age >= 18 && person4.nationality === `Brazilian`) {
     console.log(`Parabéns ${person4.name} você foi aprovado com sucesso.`)
 } else {
     console.log(`Infelizmente ${person4.name} você não foi aprovado.`)
 }
 if(person5.age >= 18 && person5.nationality === `Brazilian`) {
     console.log(`Parabéns ${person5.name} você foi aprovado com sucesso.`)
 } else {
     console.log(`Infelizmente ${person5.name} você não foi aprovado.`)
 }

