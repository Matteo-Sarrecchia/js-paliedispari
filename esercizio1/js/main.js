// Chiedere all’utente di inserire una parola
const parolaUser = prompt("Inserisci una parola");
console.log(parolaUser);
document.getElementById("containerUSer").innerHTML = parolaUser;

// Creare una funzione per capire se la parola inserita è palindroma

// FUNZIONE INVERTI PAROLA
function invertiParola (string){

    let revertParolaUSer = string.split("");
    // console.log(revertParolaUSer)

    let arrayParola =revertParolaUSer.reverse();
    // console.log(arrayParola)

    let newParolaUSer = arrayParola.join("");
    // console.log(newParolaUSer)

    return newParolaUSer;

};

let newRevertParolaUSer = invertiParola(parolaUser);
console.log(newRevertParolaUSer)


// FUNZIONE VERIFICA PAROLA PALINDORMA
function verificaParolaPalindroma (string){

    let parolaPalindroma

    if (parolaUser === newRevertParolaUSer){

        return parolaUser + " é una parola palindroma"
    } else return  parolaUser + " NON é una parola palindroma"
};

let risultato = verificaParolaPalindroma(parolaUser);
console.log(risultato)

document.getElementById("containerRisultato").innerHTML = risultato;
