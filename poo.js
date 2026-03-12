class Calculo{

    constructor( quantidade_extra){
     this.carga = 220
     this.salario = 10000;
     this.extra_50 = 1.5
     this.quantidade_extra = quantidade_extra
     
    }

   sal_hora(){

   return this.salario / this.carga
   
   }
  
   valor_extra(h_sal){

     return h_sal * this.extra_50
     
     }

// calcule a quantidade de hora extra
quantidade(q, valorExtra){

 return q * valorExtra


}

 // faça o calculo do salário mais a extra

sal_total(salario , qE){

return salario +  qE


}


}

let calculo_sal_hora = new Calculo(10)
let hr_sal =  calculo_sal_hora.sal_hora()
console.log('valor hora', hr_sal.toFixed(2))



let valor_ex = calculo_sal_hora.valor_extra(hr_sal)
console.log('valor extra', valor_ex.toFixed(2))


q  = 10
let quantidadeTE  =   calculo_sal_hora.quantidade(10, valor_ex)
console.log('Quantidade realizada -> '+ q + ' Quantidade total em valor R$ '+ quantidadeTE.toFixed(2))

let total =  calculo_sal_hora.sal_total(10000,quantidadeTE ) 
console.log('SALARIO TOTAL R$ ' +  total.toFixed(2))









// Classe Pessoa Básica -atributos  -  nome, idade, endereco, formacao

// class Pessoa {
//       // auxilia ma criação dos atrinutos da classe
//     constructor(nome, idade, endereco, formacao){

//     this.nome = nome;
//     this.idade = idade;
//     this.endereco = endereco;
//     this.formacao = formacao;
//     }


// }



// let pessoa = new Pessoa('junior', 25, 'rua 100', 'ads')
// console.log(pessoa)

// -------------------


// Classe Pessoa Básica -atributos  -  nome, idade, endereco, formacao


// class Pessoa {
//       // auxilia ma criação dos atrinutos da classe
//     constructor(nome, idade, endereco, formacao){


//     this.nome = nome;
//     this.idade = idade;
//     this.endereco = endereco;
//     this.formacao = formacao;
//     }



// }




// let pessoa = new Pessoa('junior', 25, 'rua 100', 'ads')
// console.log(pessoa)

//--------------------------

// class Retangulo{

//   constructor(altura, largura){

//     this.altura = altura
//     this.largura = largura


//   }


// }

// let retangulo = new Retangulo(50, 60)
// console.log(retangulo)


//--------------------------

class Conta{

   constructor(saldo, valor_saque, valor_deposito){

      this.saldo = saldo
      this.valor_saque = valor_saque
      this.valor_deposito = valor_deposito


   }
saque(){

return this.saldo - this.valor_saque

}
     
deposito(){

    return this.valor_deposito + this.saldo

}

saldo(){

 return this.saldo + this.valor_deposito - this.valor_saque

}

}


let conta = new Conta(1000,100,250)

console.log(conta)

let saque1;

saque1 = conta.saque()
console.log(saque1)


let deposito;

deposito = conta.deposito()
console.log(deposito)


let saldo1;

saldo1 = conta.saldo()
console.log(saldo1)
