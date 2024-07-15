// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.

// function calcolaPrezzo (){	 
//     var userPreference;

//     // richiesta km
//     // la variabile chilometri contiene il numero di chilometri 
//     // che il viaggiatore deve percorrere
//     let chilometri = prompt ("Inserisci il numero di km che devi percorrere"); 
//     // console.log (chilometri + " questo è il numero di chilometri che il viaggiatore deve percorrere"); 
//     document.getElementById("km").innerHTML = chilometri;
//     // richiesta età
//     let eta =  prompt ("Inserisci l'età del passeggero");
//     // console.log (eta); 
//     document.getElementById("age").innerHTML = eta;

//     if (isNaN(chilometri) || isNaN (eta) || km <=0 || eta <= 0 ) {
//         alert("Per favore, inserire valori numerici validi");
//     }

//     eta = parseInt (eta);
//     chilometri = parseFloat(chilometri);

//     // prezzo per chilometro
//     const prezzoPerKm = 0.21 // questa è una costante

//     // eseguo il calcolo
//     let prezzoTotale = chilometri * prezzoPerKm;

//     // applico gli sconti al prezzo del biglietto  
//     if (eta < 18) {
//     prezzoTotale = prezzoTotale * 0.8;    // minorenni
//     } else if (eta > 65) {
//         prezzoTotale = prezzoTotale * 0.6;  // over 65
//     }

//     //indico il numero massimo di decimali che devo visualizzare
//     prezzoTotale = prezzoTotale.toFixed(2);

//     alert (`Il prezzo totale del viaggio è euro ${prezzoTotale}`); 
//     document.getElementById("final-price").innerHTML = prezzoTotale;
// }




// come prendere i dati dalla pagina web?

// 1) prompt
// 2) getElementById
// devo fare una conversione? 
// km parseInt o parseFloat  

// 1) richiesta dei dati 
// // richiesta km
// let chilometri = prompt ("Inserisci il numero di km che devi percorrere"); 
// chilometri = parseFloat(chilometri);
// console.log (chilometri); 

// // richiesta età
// let eta =  prompt ("Inserisci l'età del passeggero");
// eta = parseInt (eta);
// console.log (eta); 

// 2) calcolo
// // prezzo per chilometro
// const prezzoPerKm = 0.21 // questa è una costante 

// let prezzoTotale = chilometri * prezzoPerKm;

// prezzoTotale.toFixed(2) ; // metodo di arrotondamento
//                           // a livello di variabile
//                           // il parametro fornito indica il numero di decimali                          

// 3) applicazione sconti
// applicare gli sconti

// -> if accetta delle condizioni
// -> else fi accetta anch'esso delle condizioni

// if (condizione) {
//     fai questo
// } else if (condizione2) {
//     fai quest'altro
// } else if (condizione3) {
//     fai quest'altro ancora...
// } else {

// }

// if (eta < 18) {
//     prezzoTotale = prezzoTotale * 0.8; 
// } else if (eta > 65) {
//     prezzoTotale = prezzoTotale * 0.6; 
// } else {
//     if (periodoEstivo = true) {
//         prezzoTotale = prezzoTotale * 0.95;
//     } 
// }



// miglioramenti ulteriori:

// 1) prendo i dati direttamente dalla pagina senza prompt:

// <input type="text" id ="km" name ="km"> 
// <input type="text" id ="age" name ="age"> 
// <button onclick="calcolaPrezzo()"> Calcola prezzo </button> 

// document.getElementById('km').value;
// document.getElementById('age').value;

// if (isNaN(chilometri) || isNaN (eta) || km <=0 || eta <= 0 ) {
//     alert("Per favore, inserire valori numerici validi");
// }

// isNaN(chilometri)
console.log('scripts.js is loaded');

document.getElementById("kilometers-form").addEventListener('submit', function (event) {
    event.preventDefault();

    // Ottenere i valori dei campi del modulo
    let chilometri = document.getElementById('km').value;
    let eta = document.getElementById('age').value;

    // Controllo di validità dei valori inseriti
    if (isNaN(chilometri) || isNaN(Date.parse(eta)) || chilometri <= 0) {
        alert("Per favore, inserire valori validi");
        return;
    }

    // Convertire i chilometri a numero
    chilometri = parseFloat(chilometri);

    // Calcolare l'età del passeggero in base alla data di nascita
    let today = new Date();
    let birthDate = new Date(eta);
    eta = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        eta--;
    }

    // Prezzo per chilometro
    const prezzoPerKm = 0.21;

    // Eseguire il calcolo del prezzo totale
    let prezzoTotale = chilometri * prezzoPerKm;

    // Applicare gli sconti
    if (eta < 18) {
        prezzoTotale *= 0.8;    // minorenni
    } else if (eta > 65) {
        prezzoTotale *= 0.6;  // over 65
    }
    else {

    prezzoTotale

    }

    // Indicare il numero massimo di decimali da visualizzare
    prezzoTotale = prezzoTotale.toFixed(2);

// Mostrare il risultato nella pagina
document.getElementById('final-price').innerText = prezzoTotale;
});

