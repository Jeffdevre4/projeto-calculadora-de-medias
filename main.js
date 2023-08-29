const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="reprovado.png" alt="Emoji decepcionado" />';
const atividade = [];
const notas = [];
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>'; //função pra aparece "aprovado" caso consiga uma nota boa
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>'; //função o com mesmo proposito só que oposto da primeira
const notaMinima = parseFloat(prompt("digite a nota minima:")); //pra deifinir a nota minima direto do navegador

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalinha();
    atualizaTabela();
    atualizaMediaFinal();

});

    function adicionalinha(){
        const imputNomeAtividade = document.getElementById('nome-atividade'); //função pro nome
        const imputNotaAtividade = document.getElementById ('nota-atividade');//função pra Nota

        if (atividade.includes(imputNomeAtividade.value)){
            alert(`atividade: ${imputNomeAtividade.value} já foi inserida`) //pra não repetir. ex:teste1 duas vezes
        }
    //else é pra não acontece nada depois da mensagem
    else{
        atividade.push(imputNomeAtividade.value);
        notas.push(parseFloat(imputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${imputNomeAtividade.value}</td>`;
        linha += `<td>${imputNotaAtividade.value}</td>`;
        linha += `<td>${imputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
    imputNomeAtividade.value = '';
    imputNomeAtividade.value = '';
    
}

    

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
const mediafinal = calculamediafinal();

    document.getElementById("media-final-valor").innerHTML = mediafinal;
    document.getElementById("media-final-resultado").innerHTML = mediafinal >= notaMinima ? spanAprovado : spanReprovado;
}


function calculamediafinal() {
    let somaDasNotas = 0;

    for (let i = 0; i <notas.length; i++) {
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}