
function calculateGrade(p1,p2,frequencia){
    var nota = (p1 * 0.3) + (p2 * 0.4) + (frequencia * 0.3)

console.log("Nota: " + nota)

if (nota >= 9.5)
    console.log("O aluno está aprovado");
else
    console.log("O aluno está reprovado");

console.log()
}

calculateGrade(13,12,20)
calculateGrade(8,10,4)
calculateGrade(20,20,20)
calculateGrade(6,5,4)
