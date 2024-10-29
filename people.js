/*people.js*
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.*/

//Importa la tua funzione da names.js
const fullName = require('./names.js');

//Importa la tua funzione da hobbies.js
const myHobbies = require('./hobbies.js');

//Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies.
function person(){
    return {
        
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        hobbies: myHobbies.hobbies
        
    };
}

const jacopo = person();
console.log(jacopo);


