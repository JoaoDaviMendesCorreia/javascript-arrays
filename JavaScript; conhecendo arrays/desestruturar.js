const alunos = ['João', 'Carlos', 'Danubia', 'Reis', 'Juliana']
const media = [6, 7, 9, 4, 5]
const lista =[alunos, media] 
function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const [alunos, media] = lista
        const indice = alunos.indexOf(aluno);
        
        const mediaAluno = media[indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
        } else {
        console.log('Estudante não existe na lista');
        }
    }
    
exibeNomeENota('Juliana');
exibeNomeENota('Vini');