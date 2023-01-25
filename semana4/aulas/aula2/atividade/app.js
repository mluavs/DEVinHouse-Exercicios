const lista = document.getElementById('lista');
const dados = [
    {
        nome: 'Marina',
        imagem: '',
        frase: 'o mundo acabou duas vezes'
    }, 
    {
        nome: 'Alice',
        imagem: '',
        frase: 'e eu sonhei com você'
    }];

    dados.forEach(element => {
        const item = document.createElement('li');
        const imagem = document.createElement('img');
        const span = document.createElement('p');
        const frase = document.createElement('p');

        imagem.src = 'https://64.media.tumblr.com/a95c31f056c682d7169be78d2151b1b0/2fbf5f089d388a1a-a2/s400x600/123a2782677d7c78e5d89729a14072a6332e85ba.jpg'
        imagem.width = 50;
        span.innerText = element.nome;
        frase.innerText = element.frase;
        item.appendChild(imagem)
        item.appendChild(span)
        item.appendChild(frase)
        lista.appendChild(item)
    })