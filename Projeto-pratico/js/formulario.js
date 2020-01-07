var botaoAdicionar = document.querySelector("#adicionar-aluno");

botaoAdicionar.addEventListener("click", function(event) {
event.preventDefault();

var form = document.querySelector("#form-adiciona");
var aluno = obtemAlunoDoFormulario(form);
var erros = validaAluno(aluno);

if (erros.length > 0) {
    exibeMensagensDeErro(erros);

    return;
}

adicionaAlunoNaTabela(aluno);

form.reset();

var mensagensErro = document.querySelector("#mensagens-erro");
mensagensErro.innerHTML = "";

});

function obtemAlunoDoFormulario(form) {

    var aluno = {
        nome: form.nome.value,
        turma: form.turma.value,
        nota1: form.nota1.value,
        nota2: form.nota2.value,
        mediafim: calculaMediaFim(form.nota1.value, form.nota2.value),
        resultfin: validaMedia(mediafim),
    }   
    return aluno;
}

function montaTr(aluno) {
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");

    alunoTr.appendChild(montaTd(aluno.nome,"info-nome"));
    alunoTr.appendChild(montaTd(aluno.turma,"info-turma"));
    alunoTr.appendChild(montaTd(aluno.nota1,"info-nota1"));
    alunoTr.appendChild(montaTd(aluno.nota2,"info-nota2"));
    alunoTr.appendChild(montaTd(aluno.mediafim,"info-mediafim"));
    alunoTr.appendChild(montaTd(aluno.resultfin,"info-resultadofin"));

    return alunoTr;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaAluno(aluno) {

    var erros = [];

    if (aluno.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (aluno.turma.length == 0) {
        erros.push("A turma não pode estar em branco");
    }

    if (aluno.nota1.length == 0) {
        erros.push("A nota 1 não pode estar em branco");
    }

    if (aluno.nota2.length == 0) {
        erros.push("A nota 2 não pode estar em branco");
    }

    if (aluno.nota1 > 100 && aluno.nota2 > 100) {
        erros.push("A nota não pode ser acima de 100");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaAlunoNaTabela(aluno) {
    var alunoTr = montaTr(aluno);
    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
}
