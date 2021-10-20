
//prompt vincolato per la scelta di pari o dispari utente
let pariodispari;
while (pariodispari != "pari" && pariodispari != "dispari") {
    pariodispari = prompt("scegli pari o dispari").toLowerCase();
}


//prompt per l'inserimento del numero utente
let numeroutente = Number(prompt('inserisci unumero da 1 a 5 e giochiamo')); //-------il prompt accetta qualsiasi numero 


//genero un numero casuale da uno a 5 con una funzione
function generatoreNumeroComputer() {
    let numerocasuale = Math.floor(Math.random() * 5) + 1
    return numerocasuale;
}
let sceltaComputer = generatoreNumeroComputer();


//sommo i numeri scelti
let sum = numeroutente + sceltaComputer


//per determinare se il numero è pari o dispari creo una funzione
function verificatore(x) {
    if (x % 2 == 0){return 'pari'}
    else {return 'dispari'}
}


console.log(`User sceglie ${pariodispari} e fa ${numeroutente}`);
console.log(`Il pc fa ${sceltaComputer}`);
console.log(`La somma dei due numeri è ${sum}`);


//determino il vincitore evocando la funzione 
if (pariodispari == verificatore(sum)){
    console.log('hai vinto');
}
else {
    console.log('ha vinto il computer');
}


