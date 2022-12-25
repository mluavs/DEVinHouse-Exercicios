var numeroDigitado = parseInt(prompt('Digite um número'));

if (isNaN(numeroDigitado)) {
    alert('Número inválido')
} else {
    var pares = 0
    var impares = 0
    for (var i = 0; i <=numeroDigitado; i++){
        if (i % 2 === 0){
            pares += 1;
        } else {
            impares += 1;
        }
    }
    alert (`Entre 0 e ${numeroDigitado}, existem ${pares} números pares e ${impares} números ímpares`)
}

