var botao_adiciona = document.querySelector("#adiciona_dados");
var campo_data = document.querySelector("input[name='ano']");
var ano_hoje = new Date();
var ano_atual = ano_hoje.getFullYear();

function Entrevista(nome , ano)


function adiciona_dados(){
    var ano_informado = campo_data.value;
    if ( ano_informado >= 1900 && ano_informado <= ano_atual){
        console.log('A data digitada esta ok');

    }else{
        document.querySelector(".alerta").innerText = "Data Invalida!!";

    };

};

botao_adiciona.addEventListener('click', adiciona_dados);