
let parola = prompt('inserisci una parola');

function verificaPalindromi() {
    let parolaX = parola.split("").reverse().join("");
    if(parola == parolaX){
         alert('la tua parolla è palindroma')
    }
    else{
         alert('la parola inserita non è palindroma')
    }
}

verificaPalindromi();






