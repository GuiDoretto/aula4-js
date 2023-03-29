//substituir texto

let texto = "Estão chegando as provas"
console.log(texto.replace("provas","avaliações"))

//fixar o valor

let num = 223.45555
console.log(num.toFixed(2))

caixa alert
alert("olá meu amigo!")

//caixa de confirmação

let teste = confirm("Você é um aluno?")
console.log(teste)

//caixa de prompt

let texto1 = prompt("Digite seu nome")
document.write("<br>")
//console.log("O nome dele é: ", texto1)
document.write("O nome dele é: ", texto1)


//if

if(20 >= 20){
    document.write("20 é maior ")
}

//if else

if(25 < 15){
    document.write("Número Maior")
}else{
    document.write("Número Menor")
    document.write("<br><br>")
}

//if else declarando variavel

let numero = 10
if(numero > 10){
    document.write("O número é maior")
}else{
    document.write("O número é menor")
    document.write("<br><br>")
}

//if else encadeado

//let idade = 18
let idade = prompt("Digite sua idade")

if(idade <= 12){
    document.write("É uma criança")
}else if(idade <= 17){
    document.write("Ele é um adolescente")
}else if(idade <= 30){
    document.write("É um jovem adulto")
}else{
    document.write("É um adulto experiênte")
}

//&& "e" - || "ou"


let valor = 25
if(valor < 10 || valor > 20){
    document.write("Este valor não está entre 10 e 20")
}

let valor = 25
if(valor < 10 && valor > 20){
    document.write("Este valor não está entre 10 e 20")
}



//---------------------------------------------

let entrada = prompt("Digite sua idade");

if (entrada >= 12 && entrada <= 17) {
  document.write("Só pode entrar na matinê");
} else if (entrada >= 18) {
  document.write("Pode entrar na boate");
}


//---------------------------------------------