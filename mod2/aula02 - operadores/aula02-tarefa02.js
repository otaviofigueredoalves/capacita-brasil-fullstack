// VERIFICAR MÉDIA ALUNO

let nota1 = 7; // recebe a primeira nota
let nota2 = 7;  // recebe a segunda nota
let nota3 = 7; // recebe a terceira nota
let nota4 = 7; // recebe a quarta nota

let media = (nota1+nota2+nota3+nota4)/4 // calcula a média

console.log(`### A média é ${media.toFixed(2)} ##`); // mostra a média

media = media == 10? "BRAAAAAAAAAAAAAAAAAAABO, É CRÂNIO DEMAIS ESTE JOVEM! É A LENDA!" : media >= 7 && media < 10 ? "Aluno aprovado!" : media < 7 && media > 4 ? "Aluno em recuperação" : "Aluno reprovado!";

// MÉDIA É IGUAL A 10? receba "BRAAAAAAAAAAAAAAAAAAABO, É CRÂNIO DEMAIS ESTE JOVEM! É A LENDA!" SE NÃO: RECEBE MÉDIA MAIOR OU IGUAL A 7 E MENOR QUE 10? receba "ALUNO APROVADO! SE NÃO: MÉDIA MENOR QUE 7 E MAIOR QUE 4 ? 'ALUNO EM RECUPERAÇÃO' SE NÃO: 'ALUNO REPROVADO'" 
console.log(media);