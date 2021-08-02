"use strict";
//Corchetes []
// tipo explicito
var users;
users = ['dadada', 'lululu', 'nenenene', 'alalalalal'];
// users = [1, true, 'test'] //error!
// tipo inferido
var otherUsers = ['dadada', 'lululu', 'nenenene'];
//Array <TIPO>
var pictureTitles;
pictureTitles = ['one Sun', 'two Mountain', 'three ocean'];
// Accediendo a los valores en un Array
console.log('first user', users[0]);
console.log('first title', pictureTitles[2]);
//Propiedades en Array
console.log('users.length', users.length);
//Uso de funciones en Arrays
users.push('Platzi User');
users.sort();
console.log('users', users);
