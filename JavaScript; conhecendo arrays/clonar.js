const notas = [7, 7, 8, 9];
const novaListaNotas = notas;

novaListaNotas.push(10);

// código omitido
const novaListaNotas = [...notas, 10];

// novaListaNotas.push(10);