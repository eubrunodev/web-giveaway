const buttonVoltar = document.getElementById('buttonVoltar');
const numeroInicialInput = document.getElementById('inBetweenNumber');
const numeroFinalInput = document.getElementById('andNumber');
const buttonSortear = document.getElementById('buttonSortear');

const buttonLimpar = document.getElementById('buttonLimpar');

const painelResultado = document.getElementById('painelResultado');
const resultado = document.getElementById('resultado');

function sortearNumeros(){
    let numeroInicial = parseInt(numeroInicialInput.value);
    let numeroFinal = parseInt(numeroFinalInput.value);
    let randomNumber = gerarNumeroAleatorio(numeroInicial, numeroFinal);
    const titulo = document.getElementById('numeroSorteado');

    if(randomNumber == 0){
        titulo.innerText = 'Error'
        resultado.innerText = 'Você não digitou os números!';
        painelResultado.classList.add('mostrarResultado');
    } else {
        resultado.innerText = randomNumber;

        console.log(resultado);
        painelResultado.classList.add('mostrarResultado');
    }
}

function gerarNumeroAleatorio(numeroInicial, numeroFinal){
    if(!numeroInicial && !numeroFinal) {
        numeroInicial = 0;
        numeroFinal = 0;
    }
    return Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;
}

buttonSortear.addEventListener('click', sortearNumeros);

// limpa os numeros que voce ja digitou
function limparCampos(){
    numeroInicialInput.value = '';
    numeroFinalInput.value = '';
}
buttonLimpar.addEventListener('click', limparCampos);

// depois que sorteia aparece o botao para voltar ao menu inicial
function voltarMenu(){
    window.location.replace("index.html");
}
buttonVoltar.addEventListener('click', voltarMenu);

// parte de div do dev
const git = document.getElementById('githubButton');
function githubRedirect() {
    window.location.replace("https://github.com/eubrunodev")
}
git.addEventListener('click', githubRedirect);