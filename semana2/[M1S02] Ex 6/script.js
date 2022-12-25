var operacao = prompt('Operação (+, -, *, /)')
var num1 = parseFloat(prompt('Digite o primeiro número'))
var num2 = parseFloat(prompt('Digite um segundo número'))

switch (operacao) {
    case '+':
        alert(num1 + num2)
        break;
    case '-':
        alert(num1 - num2)
        break;
    case '*':
        alert(num1 * num2)
        break;
    case '/':
        alert(num1 / num2)
        break;
    default:
        alert('Operação inválida')
}