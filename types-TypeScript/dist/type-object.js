"use strict";
// Type: object
var user;
user = {}; //Object
user = {
    id: 1,
    username: 'danielvaldivv',
    firstName: 'daniel',
    isPro: true
};
console.log('user: ', user);
// Object vs object (Clase JS vs tipo TS)
var myObj = {
    id: 1,
    username: 'danielvaldivv',
    firstName: 'daniel',
    isPro: true
};
var isInstance = myObj instanceof Object; //clase object JavaScript
console.log('isInstance: ', isInstance);
console.log('myObj.username: ', myObj.username);
