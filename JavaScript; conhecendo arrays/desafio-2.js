//1
//function junçaoarrays(A, B) {
   // return A.concat(B)
//}



//const lista1 = ['caio','augusto', 'Guimarães', 'Danubia']
//const lista2 = [1, 2, 3, 4, 5, 6]

 //const lista3 = junçaoarrays(lista1, lista2)
 //console.log(lista3)
 //2
 //const alunos = ['carlos', 'clotilde', 'brown', 'marcela', 'lucas', 'eduarda', 'marlene', 'rubia', 'telde', 'alessandra']
 //const parteAlunos = alunos.slice(3,8)
 //console.log(parteAlunos)
 //3
 //const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
 //frutas.splice(2, 2, 'Pêssego', 'Kiwi');
 //console.log(frutas);
 //5
 let matriz = [];
 let valorInicial = 1;
 
 for (let i = 0; i < 3; i++) {
   let linha = [];
   for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
   }
   matriz.push(linha);
 }
 
 console.log('Matriz de duas dimensões:');
 console.log(matriz);
 matriz.forEach(row => console.log(row));
 console.log('Elemento na segunda linha e terceira coluna:', matriz[1][2]);
 matriz[2][1] = 15;
console.log('Matriz após adição de elemento:', matriz);