//variaveis Globais
var botao_adiciona = document.querySelector("#adiciona_dados");
var campo_data = document.querySelector("input[name='ano']");
var campo_nome = document.querySelector("input[name='nome']");
var corpo_tabela = document.querySelector("tbody");
var ano_hoje = new Date();
var ano_atual = ano_hoje.getFullYear();

//Objeto

function Entrevista(nome , ano){
    this.nome = nome;
    this.ano_informado = ano;
    this.calcula_idade = function(){
        return ano_atual - this.ano_informado;
    }

       this.criar_linha_tabela = function() {
        //Elementos
        var linha = document.createElement('tr');
        var campo_nome = document.createElement("td");
        var campo_ano = document.createElement("td");
        var campo_idade = document.createElement("td");
        //style
        //campo_nome.className = "bold";
        //nos
        var texto_nome = document.createTextNode(this.nome);
        var texto_ano = document.createTextNode(this.ano_informado);
        var texto_idade = document.createTextNode(this.calcula_idade());
        //vincular nos aos elementos
        campo_nome.appendChild(texto_nome);
        campo_ano.appendChild(texto_ano);
        campo_idade.appendChild(texto_idade);
        linha.appendChild(campo_nome);
        linha.appendChild(campo_ano);
        linha.appendChild(campo_idade);
        //vincula elemento ao doc
        corpo_tabela.appendChild(linha);
    }

    this.criar_pelo_template = function(){
        var template = document.querySelector("#template");
        lista_td = template.content.querySelectorAll("td");
        lista_td[0].textContent = this.nome;
        lista_td[1].textContent = this.ano_informado;
        lista_td[2].textContent = this.calcula_idade();
        var nova_linha = document.importNode(template.content, true);
        corpo_tabela.appendChild(nova_linha);
    }
};

//funcoes

function adiciona_dados(event){
    event.preventDefault();
    var ano_informado = campo_data.value;
    if ( ano_informado >= 1900 && ano_informado <= ano_atual){
        nova_entrevista = new Entrevista(campo_nome.value, campo_data.value );
        nova_entrevista.criar_pelo_template();
    }else{
        document.querySelector(".alerta").innerText = "Data Invalida!!";
    }
};

botao_adiciona.addEventListener('click', adiciona_dados);