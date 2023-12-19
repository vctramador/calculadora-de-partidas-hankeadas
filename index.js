let username = "victor"

console.log(`seja bem vindo, ${username} confira abaixo como calcular seu nível e desempenho em partidas hankeadas!!`)

//quantidade de vitórias/Derrotas de um player
let vitorias = 50
let derrotas = 10




function resultado(vitorias, derrotas){
    return vitorias - derrotas
}


 let saldo = resultado(vitorias, derrotas)
    if (saldo < 10){ 
    console.log("ferro")
    }

    else if (saldo >= 11 && saldo <= 20){
    console.log("bronze")
}
    else if (saldo >= 21 && saldo <= 50){
    console.log("prata")}

    else if (saldo  >= 51 && saldo <= 80)
    {console.log("ouro")}

    else if (saldo >= 81 && saldo <= 90)
    {console.log("diamante")}

    else if (saldo >= 91 && saldo <= 100)
    {console.log("lendário")}

    else if (saldo > 101)
    {console.log("imortal!!")}

console.log(`O Herói tem de saldo de ${saldo} está na classificação ${resultado(vitorias, derrotas)}`)


