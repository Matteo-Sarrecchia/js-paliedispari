// variabili globali
const scelta = document.getElementById("scelta");
const numero = document.getElementById("numero");
const risultato = document.getElementById("risultato");

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const sceltaUser = prompt ("scegli PARI o DISPARI");
console.log(sceltaUser);
scelta.innerHTML = "Hai scelto: " + sceltaUser;

const numeroUSer = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numeroUSer);
numero.innerHTML = "Hai scelto: " + numeroUSer;

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let numeroComputer = Math.floor(Math.random()*5) +1;
console.log(numeroComputer);

// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// FUNZIONE SOMMA  NUMERI
function sommaNumeri (num1, num2){
    const addizione = num1 + num2;
    return addizione
}

let somma = sommaNumeri(numeroUSer, numeroComputer);
console.log(somma);

// FUNZIONE CONTROLLO PARI DISPARI
function controlloPariDispari (num){
    if (somma % 2 === 0){
        return "pari"
    } else return "dispari"
}

let pariDispari = controlloPariDispari(somma);
console.log(somma, pariDispari);

if (sceltaUser === pariDispari){
    risultato.innerHTML = "COMPLIMENTI HAI VINTO"
} else risultato.innerHTML = "RITENTA SARAI PIU' FORTUNATO"

