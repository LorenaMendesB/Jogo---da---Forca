let tentativas = 6;
let listaDinamica = [];
let erradas = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaPalavrasTecladas = []
let iniciar = false;


const palavras = [

    palavra001 = {
        nome: "ARGENTINA",
        categoria: "PAÍS"
    },
    palavra002 = {
        nome: "BRASIL",
        categoria: "PAÍS"
    },
    palavra003 = {
        nome: "URUGUAI",
        categoria: "PAÍS"
    },
    palavra004 = {
        nome: "INGLATERRA",
        categoria: "PAÍS"
    },

    palavra005 = {
        nome: "CHILE",
        categoria: "PAÍS"
    },

    palavra006 = {
        nome: "CHINA",
        categoria: "PAÍS"
    },
    palavra007 = {
        nome: "PORTUGAL",
        categoria: "PAÍS"
    },

    palavra008 = {
        nome: "ESPANHA",
        categoria: "PAÍS"
    },

    palavra009 = {
        nome: "ALEMANHA",
        categoria: "PAÍS"
    },

    palavra010 = {
        nome: "PARAGUAI",
        categoria: "PAÍS"
    },

  
    // COMIDA

    palavra011 = {
        nome: "QUEIJO",
        categoria: "COMIDA"
    },
    palavra012 = {
        nome: "FRANGO",
        categoria: "COMIDA"
    },
    palavra013 = {
        nome: "ARROZ",
        categoria: "COMIDA"
    },
    palavra014 = {
        nome: "ESTROGONOFE",
        categoria: "COMIDA"
    },
    palavra015 = {
        nome: "BATATA",
        categoria: "COMIDA"
    },
    palavra016 = {
        nome: "JABITICABA",
        categoria: "COMIDA"
    },
    palavra017 = {
        nome: "PASTEL",
        categoria: "COMIDA"
    },
    palavra018 = {
        nome: "COXINHA",
        categoria: "COMIDA"
    },
    palavra019 = {
        nome: "ESFIRRA",
        categoria: "COMIDA"
    },
    palavra020 = {
        nome: "BOLO",
        categoria: "COMIDA"
    },




    //objeto


    palavra021 = {
        nome: "LANTERNA",
        categoria: "OBJETO"
    },
    palavra022 = {
        nome: "CADERNO",
        categoria: "OBJETO"
    },
    palavra023 = {
        nome: "CAMA",
        categoria: "OBJETO"
    },
    palavra024 = {
        nome: "VENTILADOR",
        categoria: "OBJETO"
    },
    palavra025 = {
        nome: "PINCEL",
        categoria: "OBJETO"
    },
    palavra026 = {
        nome: "GELADEIRA",
        categoria: "OBJETO"
    },
    palavra027 = {
        nome: "GUARDANAPO",
        categoria: "OBJETO"
    },
    palavra028 = {
        nome: "LIVRO",
        categoria: "OBJETO"
    },
    palavra029 = {
        nome: "COMPUTADOR",
        categoria: "OBJETO"
    },
    palavra030 = {
        nome: "NOTEBOOK",
        categoria: "OBJETO"
    },
//ANIMAL
    
    palavra031 = {
        nome: "GATO",
        categoria: "ANIMAL"
    },
    palavra032 = {
        nome: "ELEFANTE",
        categoria: "ANIMAL"
    },
    palavra033 = {
        nome: "VACA",
        categoria: "ANIMAL"
    },
    palavra034 = {
        nome: "PORCO-ESPINHO",
        categoria: "ANIMAL"
    },

    palavra035 = {
        nome: "FORMIGA",
        categoria: "ANIMAL"
    },

    palavra036 = {
        nome: "TIGRE",
        categoria: "ANIMAL"
    },
    palavra037 = {
        nome: "TARTARUGA",
        categoria: "ANIMAL"
    },

    palavra038 = {
        nome: "GIRAFA",
        categoria: "ANIMAL"
    },

    palavra039 = {
        nome: "BORBOLETA",
        categoria: "ANIMAL"
    },

    palavra040 = {
        nome: "PAPAGUAIO",
        categoria: "ANIMAL"
    },

    palavra041 = {
        nome: "MORCEGO",
        categoria: "ANIMAL"
    },
]

function start() {
    if(listaPalavrasTecladas.length > 0){

        for(var i = 0; i < listaPalavrasTecladas.length; i++){
            document.getElementById("tecla-" + listaPalavrasTecladas[i]).disabled = false;
            document.getElementById("tecla-" + listaPalavrasTecladas[i]).style.background = 'rgb(245, 243, 241)';
            document.getElementById("tecla-" + listaPalavrasTecladas[i]).style.color  ='palevioletred';
        }
        listaPalavrasTecladas = []
    }
    document.getElementById('palavra-secreta').innerHTML = "";
    document.getElementById('letrasErradas').innerHTML = "<div>Letras erradas: </div>";  
     listaDinamica = [];
     tentativas = 6;
     tentativasRestantes();

    document.getElementById("imagem").style.background = "url('./images/1.png')";
    criarPalavraSecreta();
    montarPalavraNaTela();
   iniciar = true;
}
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra].nome;

    palavraSecretaCategoria = palavras[indexPalavra].categoria;



}
function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML =  "Dica: É um " + palavraSecretaCategoria;
    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {


        if ((listaDinamica[i] == undefined)) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"

        }

        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"

        }

    }


}

function montarPalavraErradas(letra){
    const palavraTelaErrada = document.getElementById('letrasErradas');
    var div = document.createElement('div');
    div.classList = 'erradas'
    div.textContent = letra;
    palavraTelaErrada.appendChild(div);
   
}

function tentativasRestantes(){
    var tentativasRestantes = document.getElementById('tentativasRestantes');
    tentativasRestantes.innerHTML = tentativas;
    tentativasRestantes.innerHTML = "<div id='tentativasRestantes'>" + 'Tentativas restantes: ' + tentativas + "</div>"
   
   
}

function verificaLetraEscolhida(letra) {
    if (iniciar == true){
        document.getElementById("tecla-" + letra).disabled = true;
        listaPalavrasTecladas.push(letra);
        if (tentativas > 0) {
                mudarStyleLetra("tecla-" + letra)
                if(comparalistas(letra) == 1){
                    montarPalavraNaTela();
                }
                else{
                    montarPalavraErradas(letra);
                }
        }
    }else {
        alert("Inicie o jogo!")
    }
}


function mudarStyleLetra(tecla, letra) {


    document.getElementById(tecla).style.background = 'purple';
    document.getElementById(tecla).style.color = '#fff';


}
function comparalistas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0) {
        tentativas--
        carregaImagemForca();

        if (tentativas == 0) {
            abreModal("PERDEU!", "A palavra era <br>" + palavraSecretaSorteada);
        }
        return 0;
    }
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }

        }
        let vitoria = true;
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] != listaDinamica[i]) {

                vitoria = false;
            }

        }
        if (vitoria == true) {
            abreModal("ACERTOU", "Você conseguiu acertar com <br>" + tentativas + " tentativas restantes !");
            tentativas = 0;

        }
        return 1;
    }
}


function carregaImagemForca() {
tentativasRestantes();

  switch (tentativas) {
      
        case 5:
            document.getElementById("imagem").style.background = "url('./images/2.png')";

            break;

        case 4:
            document.getElementById("imagem").style.background = "url('./images/3.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./images/4.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./images/5.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./images/6.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./images/7.png')";
            break;


    }
}

function abreModal(titulo, mensagem) {

    let modalTitulo = document.getElementById("exampleModalLabel")
    modalTitulo.innerText = titulo;
    let modalbody = document.getElementById("modalBody")
    modalbody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });

}
