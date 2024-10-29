/* hobbies.js
Creo una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree che restituirà un oggetto con una proprietà hobbies, che è un array di hobby.*/
function myHobbies(hobbyOne, hobbyTwo, hobbyThree) {
    return {
        hobbies: [hobbyOne, hobbyTwo, hobbyThree]
    }
};

//Esporto la funzione dal file
module.exports = myHobbies('calcio', 'tennis', 'programmazione');