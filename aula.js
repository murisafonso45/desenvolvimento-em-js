


// locais 
// function imc(){
//    // variaveis locais ********* dentro da função
//    let peso =  Number(prompt('Peso: '))
//    let altura = Number(prompt('Altura: '))
//    imc =  peso / (altura * altura)
//    return imc



// }


// // variáveis globais ******* fora da função
// let peso =  Number(prompt('Peso: '))
// let altura = Number(prompt('Altura: '))
// function imc(){
//     // variaveis locais


//     imc =  peso / (altura * altura)
//     return imc
 
 
//  }
 


// parametros ************ variavies vazias que são preenchidas por 
// argumentos


// function imc(peso, altura){
//     let imc_  =  peso / (altura * altura)
//     return imc_
// }



// function display(){


// let  peso = prompt('Digite seu peso: ')
// let  altura = prompt('Digite sua altuta: ')    


// document.write('<h1>',imc(peso,altura),'</h1>','<br>');
// document.write('<h1>',imc(peso,altura),'</h1>','<br>');
// document.write('<h1>',imc(peso,altura),'</h1>','<br>');
// document.write('<h1>',imc(peso,altura),'</h1>','<br>');
// document.write('<h1>',imc(peso,altura),'</h1>','<br>');


// }


// display()












// function subtracao(){
//    //  variaveis locais
//    // escopo função subtracao
//  let nome = 'Kaique'
//  let   sobrenome = 'Almeida'
//   return nome + ' ' +  `${sobrenome}`


// }


// x  =  subtracao()


// console.log(x)


// function teste(){


// sobrenome = 'Alves'    
// // escopo da função teste
// console.log('Olá ', nome, sobrenome)


// }



// teste()
// subtracao()




// function soma(x, y){
//     return x + y
     
//   }
  



//   function subtracao(x, y){
//     return x - y
   
//   }


  

// function multiplicacao(x, y){
//     return x * y
       
//   }



  

// function divisao(x, y){
//     return x / y
   
//   }




// function calculadora(){

//    while (true){

//       x  =   Number(prompt('=') )

//       op =  prompt('+ | -| / | * ')

//       if (op == '+'){

//         y  =   Number(prompt('=') )
//         document.write(soma(x,y))
//         break


//       }else if(op == '-'){

//         y  =   Number(prompt('=') )
//         document.write(subtracao(x,y))
//         break

//       }else if(op == '*'){

//         y  =   Number(prompt('=') )
//         document.write(multiplicacao(x,y))
//         break

//       }else if(op == '/'){

//         y  =   Number(prompt('=') )
//         document.write(divisao(x,y))
//         break

//       }else{


//         document.write('<H2>DIGITE ALGO VALIDO...</H2>')

//       }




//       }



// }




// calculadora()


// function saudacao(nome, horario){

// let periodo = horario

// if(periodo === 'manhã'){
// return'bom dia, ${nome}!';
// } else if(periodo ==='tarde'){
//     return 'boa tarde, ${nome}!';
// } else if(periodo === 'noite'){
// return 'boa noite, ${nome}';
// }


// }

// saudacao()


let caracteres = false;
let numero = false;
let maiuscula = false;
let erro = "";

function validarsenha(senha) {
caracteres = false;
numero = false;
maiuscula = false;
erro = "";
if(senha.length >= 8){
caracteres = true;

} else{
 erro += "A senha deve ter pelo menos 8 caracteres/n";

}


}

