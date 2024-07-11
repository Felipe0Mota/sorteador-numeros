let lista = []

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];

    for (let i = 1; i <= quantidade; i++) {
        
    }

}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}
