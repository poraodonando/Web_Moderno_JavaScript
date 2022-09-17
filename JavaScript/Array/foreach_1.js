const aprovados = ['João', 'Bento', 'Vini', 'Carla'];

aprovados.forEach(function(nome,indice){// Nao é obrigado a passar nenhuma função
    console.log(`${indice +1}° ${nome}`)
})

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);
