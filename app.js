function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }

      if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }
    
//Aqui, em nosso exemplo, para escolhermos 5 números exclusivos,
//precisaríamos escolher o intervalo de 10 a 14, pois as possibilidades de
//sorteio seriam 10, 11, 12, 13 e 14. É por esse motivo que fazemos a
//verificação se a quantidade é maior que o cálculo (até - de + 1), pois se
//fosse igual ou inferior não apresentaria o erro de loop infinito.

// lembrar do return para que ele não sorteie o valor e retorne o alert

    for (let i = 0; i< quantidade; i++) {
       numero = obterNumeroAleatorio(de, ate);
       //while para repetir um bloco de codigos enquanto uma certa condição form verdadeira
       while (sorteados.includes(numero)){
        numero = obterNumeroAleatorio(de, ate);
       }
       
       sorteados.push(numero);

       
    }
    let resultado = document.getElementById('resultado');
       resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`

       alterarStatusDoBotao();
}

// Lembrar sempre das variaveis são a base pra tudo 
// criando Arrays para armazenar valores 
// return para voltar o valor de alguma forma
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}   

function alterarStatusDoBotao() {
    let botao = document.getElementById('btn-reiniciar')
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

}

function reiniciar() { 
    document.getElementById('quantidade').value ='';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusDoBotao();

}


