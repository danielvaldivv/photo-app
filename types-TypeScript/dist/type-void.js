"use strict";
// Void
//Tipo Explicito
function showInfo(user) {
    console.log('user Info', user.id, user.username, user.firstName);
    // return 'hola';
}
showInfo({ id: 1, username: 'danielvaldivv', firstName: 'Daniel' });
//Tipo Inferido
function showFormattedInfo(user) {
    console.log('User Info', "\n        id: " + user.id + "\n        username: " + user.username + "\n        firstName: " + user.firstName + "\n    ");
}
showFormattedInfo({ id: 1, username: 'danielvaldivv', firstName: 'Daniel' });
//Tipo Void, como tipo de dato en una variable
var unusable;
// unusable = null;
unusable = undefined;
// Tipo: Never 
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
// sumNumbers(10);
//ciclo infinito, el programa nunca termina
