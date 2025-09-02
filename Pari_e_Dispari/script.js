// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari.
const userChoice = prompt("Scegli tra pari o dispari")
console.log(userChoice);

// L’utente sceglie un numero da 1 a 5
const userNum = parseInt(prompt("Scegli un numero da 1 a 5"))
console.log(userNum);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const pcNum = randomNum(1, 5)
console.log(pcNum);

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Sommiamo i due numeri
const numSum = userNum + pcNum
console.log("Somma dei numeri scelti e generati:", numSum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
let sumVerify = oddEven(numSum)
console.log("La somma é:", sumVerify);

function oddEven(num) {
    let oddEvenVerification = ""
    if (num % 2 === 0) {
        oddEvenVerification = "pari"
    } else {
        oddEvenVerification = "dispari"
    }
    return oddEvenVerification
}

// Dichiariamo chi ha vinto.
