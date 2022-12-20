console.log("M1S02-Ex2")

let idade = prompt('Qual a sua idade, meu bem?')

if (idade === '') {
    alert ('Não digitou nada')
} else if (idade <= 15) {
    alert ('Jovem!')
} else if (idade >=16 && idade <=64) {
    alert ('Adulto!')
} else if (idade >=65) {
    alert ('Idoso!')
} 

// como prevenir a inserção de dados que não sejam números? 
// como prevenir a inserção de números que não sejam uma idade? 