function comprar() {
    // Encontra o campo em que a pessoa escolhe o tipo de ingresso.
    let tipo = document.getElementById('tipo-ingresso');
    // Encontra o campo em que a pessoa informa quantos ingressos quer.
    let qtd = parseInt(document.getElementById('qtd').value);

    // Se o tipo escolhido for pista, executa a compra de ingressos de pista.
    if (tipo.value == 'pista') {
        // Passa para a função a quantidade digitada no campo.
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
            cpmprarSuperior(qtd);
        } else {
            comprarInferior(qtd);
        }
    }


// Recebe a quantidade de ingressos de pista que a pessoa quer comprar.
function comprarPista(qtd) {
    // Encontra na página o elemento que mostra quantos ingressos de pista restam.
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
    alert('quantidade indisponivel para tipo pista');
     } else {
    qtdPista = qtdPista - qtd;
   document.getElementById('qtd-pista').textContent = qtdPista;
    alert('compra realizada com sucesso');
     }
}

function comprarSuperior(qtd) {
    // Encontra na página o elemento que mostra quantos ingressos de pista restam.
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
    alert('quantidade indisponivel para tipo superior');
     } else {
    qtdSuperior = qtdSuperior - qtd;
   document.getElementById('qtd-superior').textContent = qtdSuperior;
    alert('compra realizada com sucesso');
     }
}

function comprarInferior(qtd) {
    // Encontra na página o elemento que mostra quantos ingressos de pista restam.
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
    alert('quantidade indisponivel para tipo inferior');
     } else {
    qtdInferior = qtdInferior - qtd;
   document.getElementById('qtd-superior').textContent = qtdInferior;
    alert('compra realizada com sucesso');
     }
}