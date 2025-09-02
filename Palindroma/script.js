// Palidroma



// Chiedere all’utente di inserire una parola
const userWord = prompt("Inserisci una parola e scopri se é palindroma");
console.log(userWord);

const palindromeUserWord = palindromeTest(userWord);
console.log("Parola scelta dall'utente é palindroma?", palindromeUserWord);

// Creare una funzione per capire se la parola inserita è palindroma

// Funzione di revert della parola
function palindromeTest(word) {
    
    //  VARIABILI DI SERVIZIO PER LA SVOLGIMENTO DELLA FUNZIONE
    let revertedWord = "";
    let verification = false;

    for (let i = word.length - 1; i >= 0; i--) {
        let letterIndexes = word[i];
        revertedWord += letterIndexes
    };
    console.log(revertedWord);   // LOG DELLA PAROLA DELL'UTENTE REVERTED
    
    if (revertedWord.toUpperCase() === word.toUpperCase()) {
        verification = true
    };          // COMPARAZIONE DELLA PAROLA REVERTATA CON LA PAROLA SCELTA PER LA VERIFICA

    return verification;        // CHIUSURA FUNZIONE
}