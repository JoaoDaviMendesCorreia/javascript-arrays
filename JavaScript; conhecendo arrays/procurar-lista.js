const alunos = ['João', 'Carlos', 'Danubia', 'Reis', 'Juliana']
const media = [6, 7, 9, 4, 5]
const lista = [alunos, media]
function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
        } else {
        console.log('Estudante não existe na lista');
        }
    }
    
exibeNomeENota('Juliana');
exibeNomeENota('Vini');