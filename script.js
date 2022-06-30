function fillList() {
    var ul = document.querySelector(`.lista ul`);
    //console.log(ul)

    var frases = [
        'feliz aniversario',
        'felis natal',
        'feliz ano novo',
        'a paz do senhor',
        'volte sempre',
        'nos vemos em breve'
    ]

    for (let i = 0; i < frases.length; i++) {

        //variavel que possui o valor da string do array frases
        var licontent = frases[i];

        // cria o elemento li
        var li = document.createElement('li');
        //guarda a frase (string) criada
        li.textContent = licontent;
        
        //adicionar o li dentro do ul, empilhando a cada laço
        ul.appendChild(li);
        
    }
}

fillList();