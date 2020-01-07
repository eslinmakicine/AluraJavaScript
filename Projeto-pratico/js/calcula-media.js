var alunos = document.querySelectorAll(".aluno");

console.log(alunos);
console.log(alunos.length);

for (var i = 0; i < alunos.length; i++) {

    var aluno = alunos[i];

    var tdnome = aluno.querySelector(".info-nome");
    var nome = tdnome.textContent;
    console.log(nome)

    var tdturma = aluno.querySelector(".info-turma");
    var turma = tdturma.textContent;
    console.log(turma)

    var tdnota1 = aluno.querySelector(".info-nota1");
    var nota1 = tdnota1.textContent;
    console.log(nota1)

    var tdnota2 = aluno.querySelector(".info-nota2");
    var nota2 = tdnota2.textContent;
    console.log(nota2)

    var tdmediafim = aluno.querySelector(".info-mediafim");
    var mediafim = calculaMediaFim(nota1,nota2);
    tdmediafim.textContent = mediafim;

    var notaAcimaMedia = validaMedia(mediafim);

}

function calculaMediaFim(nota1, nota2) {
    var mediafim = 0;
    mediafim = (parseInt(nota1) + parseInt(nota2)) / 2 ;

    return parseInt(mediafim);
}

function validaMedia(mediafim) {
    var mediaAprov = 70;

    if (mediafim > mediaAprov) {
        var resultfin = "Aprovado";
        var tdresultfin = aluno.querySelector(".info-resultadofin");
        tdresultfin.textContent = resultfin;

        return resultfin;

    } else { 
        var resultfin = "Reprovado";
        var tdresultfin = aluno.querySelector(".info-resultadofin");
        tdresultfin.textContent = resultfin;
        aluno.classList.add("aluno-reprovado");    

        return resultfin;
    }
}