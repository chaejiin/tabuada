// Funções com parametros
// escopo global

function Tabuada(tabuadaUsuario) {
    //escopo específico
    let contador, resultado, saidaTabuada;

    while (contador <= 10) {


        //Atribuindo valor a variável resultado
        resultado = tabuadaUsuario * contador;
        if (contador === 0) {
            saidaTabuada = tabuadaUsuario + "X" + contador + "=" + resultado;
        } else {
            // saidatabuada = saidatabuada +"\n" + tabuada +"X"+ contador +"="+ resultado;

            saidaTabuada = `${saidaTabuada} \n ${tabuadaUsuario} X ${contador} = ${resultado}`; //teplate String

        }
        contador = contador + 1; //contador++;
    } return saidaTabuada;

}

function main() {
    // Declarando variaveis
    let tabuada, contador, resultado, resposta;
    let saidaTabuada = "";

    //Atribuindo valor a variável (contador)
    contador = 0;

    //Entrada de dados
    //Atribuindo valor a variável (tabuada)

    resposta = true;

    while (resposta === true) {
        tabuada = Number(prompt('Qual tabuada deseja resolver?'));

        saidaTabuada = "";
        for (contador = 0; contador <= 0; contador++) {
            resultado = tabuada * contador;
            saidaTabuada += tabuada + " X " + contador + " = " + resultado + "\n";
        }
        console.log(Tabuada(tabuada))
        alert(Tabuada(tabuada));
        resposta = confirm('Quer resolver outra Tabuada?');
    }
}

main();

