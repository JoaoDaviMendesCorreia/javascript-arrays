const notas = [9, 8, 7, 5, 6]
let somaDasNotas = 0
for(i= 0; i < notas.length; i++) {
    somaDasNotas += notas [i];
}

const media = somaDasNotas / notas.length
console.log(media)