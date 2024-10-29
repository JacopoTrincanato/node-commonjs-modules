/*1 - names.js
Creo la funzione fullName che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
*/

function fullName(firstName, lastName) {
    return {
        firstName,
        lastName
    }
};

//Esporto la funzione dal file
module.exports = fullName();