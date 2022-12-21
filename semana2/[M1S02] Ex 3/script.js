console.log('M1S02-Ex3')

    let num = parseInt(prompt('Digite um número'))

    if (isNaN(num)) {
        alert ('Número inválido')
    } else {
        let resposta = '';

    for (let i=1; i<=10; i++) {
        resposta += `${i} x ${num} = ${num * i} \n`
    }
    alert(resposta)
    }


