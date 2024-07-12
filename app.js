let quantidade;
let de;
let ate;

let botaoSortear = 'btn-sortear';
let botaoReiniciar ='btn-reiniciar';
    
let sorteados = [];
let numero;
let resultado = document.getElementById('resultado');

function sortear() {
    quantidade = parseInt(document.getElementById('quantidade').value);
    de = parseInt(document.getElementById('de').value);
    ate = parseInt(document.getElementById('ate').value);

    let numerosDisponíveis = ate - de + 1;

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        resultado.innerHTML = '<label class="texto__paragrafo">Preencha <strong>todos os campos</strong> acima para realizar o sorteio!</label>';

        desaativarBotão(botaoSortear);
        ativarBotão(botaoReiniciar);

    } else if (quantidade > numerosDisponíveis) {
        resultado.innerHTML = '<label class="texto__paragrafo">A quantidade de números sorteados precisa ser <strong>MENOR</strong> que a quantidade de números disponíveis para sorteio</label>';

        desaativarBotão(botaoSortear);
        ativarBotão(botaoReiniciar);
     } else if (quantidade == 0) {
        resultado.innerHTML = '<label class="texto__paragrafo">A quantidade de números sorteados <strong>NÃO PODE</strong> ser igual a ZERO!</label>';

        desaativarBotão(botaoSortear);
        ativarBotão(botaoReiniciar);

    } else if (de >= ate) {
        resultado.innerHTML = '<label class="texto__paragrafo">O valor em <strong>"Do número"</strong> precisa ser <strong>MENOR</strong> que o valor em <strong>Até o número</strong></label>';

        desaativarBotão(botaoSortear);
        ativarBotão(botaoReiniciar);

    } else {
        for (let i = 1; i <= quantidade; i++) {
            numero = obterNumeroAleatorio(de,ate);
    
            while(sorteados.includes(numero)){
                numero = obterNumeroAleatorio(de,ate);
            }
            sorteados.push(numero);
        }

        let textoLista = transformarListaEmString(sorteados);
        
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${textoLista}</label>`;
        
        ativarBotão(botaoReiniciar);
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    
    ativarBotão(botaoSortear);
    desaativarBotão(botaoReiniciar);
}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

function transformarListaEmString(lista) {
    let tamanho = lista.length;

    if (tamanho === 0) {
        return '';
    } else if (tamanho === 1) {
        return lista[0].toString();
    } else if (tamanho === 2) {
        return lista.join(' e ');
    } else {
        return lista.slice(0, -1).join(', ') + ' e ' + lista[lista.length - 1];
    }
}

function ativarBotão(id) {
    let botao = document.getElementById(id);
    botao.classList.replace('container__botao-desabilitado', 'container__botao');
}

function desaativarBotão(id) {
    let botao = document.getElementById(id);
    botao.classList.replace('container__botao', 'container__botao-desabilitado');
}