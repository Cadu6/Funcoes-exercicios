//Funções

//Exercicio 1 
//function MsgBomdia (msg){
//    return msg
//}
//console.log (MsgBomdia("Bom dia"))

//Exercicio 2 

//function listandonomes(nome){
//    return nome
//};
//console.log ("Ola",listandonomes(prompt ("Digite seu nome")))

//Exercicio 3 

//function SomaNumeros(numero1,numero2){
//    const resultado = numero1 + numero2
//    return resultado
//}
//console.log ("O resultado é",SomaNumeros (Number (prompt ("Digite um numero")),Number (prompt ("Digite um numero"))));

//Exercicio 4

//function filtraarray(arraynumeros){
//    const arrayprimeiro = arraynumeros[0]
//    const  ultimonumero = arraynumeros[arraynumeros.lenght-1]
//    return [arrayprimeiro,ultimonumero]
//}

//const numero =[11,24,39,46,57,66,72,87,94,121]
//console.log (filtraarray(numero))

//exerciocio 5

//const listadonomes= function(nome){
//        return nome
//    };
//    console.log ("Ola",listadonomes(prompt ("Digite seu nome")))


//const SomaNumeros=(numero1,numero2)=>{
//    const resultado = numero1 + numero2
//    return resultado
//}
//console.log ("O resultado é",SomaNumeros (Number (prompt ("Digite um numero")),Number (prompt ("Digite um numero"))))

//Interpretação de codigo

//1)
//a)Sera impresso 10 e 50
//b)Nao apareceria nada
//2)
//a)Esta função transformara as letras em minusculo e dara um valor true ou false dependendo se tiver ou nao a palavra cenoura
//b)i=true ii=true iii=true

//Escritas de codigo

//1
//a)
//function apresentacao(Apresentacao){
//    return Apresentacao
//}
//console.log (apresentacao("Eu sou Carlos,Tenho 15 anos,moro em são leopoldo e sou estudante"))
//b)
//function suaapresentacao(nome,idade,endereço,profissao){
//    const Myapresentacao = "Eu sou " +nome+ " Tenho "+idade+" anos, moro em "+endereço+" e sou "+profissao
//    return Myapresentacao
//}
//console.log (suaapresentacao(nome=prompt("Digite seu nome"),idade=prompt("Digite sua idade"),endereço=prompt("Digite sua cidade"),profissao=prompt("Digite sua profissao")))

//2
//a)
//function somarnumeros(numero1,numero2){
//    const soma = numero1 + numero2
//    return soma
//}
//console.log ("O resultado é",somarnumeros (Number (prompt ("Digite um numero")),Number (prompt ("Digite um numero")))); 

//b)
//function numeromaior(numero1,numero2){
//const verdadeirooufalso = numero1 > numero2
//return verdadeirooufalso
//}
//console.log ("O numero e maior?",numeromaior (Number (prompt ("Digite um numero")),Number (prompt ("Digite um numero"))));

//c)
//function ParOuNao(numero1){
//const Par = numero1 % 2 
//let verdadeirooufalso = Par === 0

//return verdadeirooufalso
//}
//console.log ("O numero e par?",ParOuNao (Number (prompt ("Digite um numero"))));

//d)
//function Msgmaisculatamanho(frase){
//const tamanho = frase.length
//const maisculo = frase.toUpperCase()
//return [tamanho,maisculo];
//};
//console.log (Msgmaisculatamanho(prompt("Digite uma frase")));

//3

//const numero1 = prompt("Digite um numero")
//const numero2 = prompt("Digite outro numero")

//function Somar(){
//    let soma = numero1 + numero2
//    return soma
//}
//function Diferença(){
//    let diferenças = numero1 - numero2
//    return diferenças
//}
//function multiplicar(){
//    let multiplicar = numero1 * numero2
//    return multiplicar
//}
//function dividir (){
//    Divisao = numero1 / numero2
//    return Divisao
//}
//console.log(Somar())
//console.log(Diferença())
//console.log(multiplicar())
//console.log(dividir())

//Desafio

//1
//a)
//const Receba = (Parametro) => {
//    console.log(Parametro)
//}

//b)

//const somar = (numero1,numero2) => {
//    let soma = numero1 + numero2
//    Receba(soma)
//}
//somar((Number (prompt ("Digite um numero")),Number (prompt ("Digite um numero"))));

//2

//function CalculaHip(Cateto1,Cateto2){
//    const cateto1quadrado = Cateto1*Cateto1
//    const cateto2quadrado = Cateto2*Cateto2
//    const hip = cateto1quadrado + cateto2quadrado
//    return hip
//}
//console.log ("Valor da hipotenusa:",CalculaHip (Number (prompt ("Digite o primeiro cateto")),Number (prompt ("Digite o segundo cateto"))));
