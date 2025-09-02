// Palidroma



// Chiedere all’utente di inserire una parola
const userWord = prompt("Inserisci una parola e scopri se é palindroma")
const userWordReverted = palindromeTest(userWord)
console.log("Parola scelta dall'utente:", userWordReverted);

// Creare una funzione per capire se la parola inserita è palindroma

// Funzione di revert della parola
function palindromeTest(word) {
    let revertedWord = ""
    let verification = false

    for (let i = word.length - 1; i >= 0; i--) {
        let letterIndexes = word[i];

        revertedWord = revertedWord + letterIndexes
        
    }
    return revertedWord
}