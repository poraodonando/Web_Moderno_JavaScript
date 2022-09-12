class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome;
    }  
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes,
        this.ano = ano,
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valor = 0;
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salário', 45000);
const contas = new CicloFinanceiro(6 , 2018);
con