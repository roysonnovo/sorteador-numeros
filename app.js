function sortear(){
    let qtd = document.getElementById('quantidade').value;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i <  qtd; i++) {
        numero = obtNum(de, ate);
        sorteados.push(numero);
    }
    alert(sorteados);
}

function obtNum(min,max){

return Math.floor(Math.random() * (max - min + 1)) + min;

}