/*people.js*

Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies.
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.*/

//Importa la tua funzione da names.js
const names = require('./names.js');
console.log(names);

const firstName = names.firstName;

const lastName = names.lastName;

//Importa la tua funzione da hobbies.js
const hobbies = require('./hobbies.js');
console.log(hobbies);

const myHobbies = hobbies.myHobbies();

function person(){
    return {
        firstName,
        lastName,
        myHobbies
    }
}

const jacopo = person();
console.log(jacopo);


