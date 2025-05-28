// ESTRUTURA DE CONTROLE

// let i = 0;
// while(i<10){
//     console.log(`Imprimindo o número ${i}`);
//     i++;
// };

// let soma = 0;
// let operacao = 0;
// for (i = 0; i <= 100; i++){
//     operacao = `${soma} + ${i} = ${soma + i}`;
//     console.log(operacao);   
//     soma += i;
// }
// ESTRUTURA DE CONTROLE

// let i = 0;
// while(i<10){
//     console.log(`Imprimindo o número ${i}`);
//     i++;
// };

let soma = 0;
let operacao = 0;

for (let i = 0; i <= 100; i++){
    operacao = `${soma} + ${i} = ${soma + i}`;
    soma += i;
    console.log(operacao);
}

// ARRAYS

// let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];
// console.log(frutas[0]);
let tecnologias = ["HTML", "CSS", "JAVASCRIPT", "VUE", "PHP", "LARAVEL", "REACT", "TAILWIND CSS", "BOOTSTRAP", "MYSQL"];

for(let i = 0; i < tecnologias.length; i++){
    console.log(`${tecnologias[i]}: ${i}`);
}
