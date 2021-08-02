"use strict";
console.log('Hola nuevamente');
console.log('Prueba de guardado');
//Number
//Explicito
var phone;
phone = 53256457;
// phone = 'hola' //Error
//Inferido
var phoneNumber = 542342562;
phoneNumber = 123;
// let phoneNumber = 'fjnwf'; //Error
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//Tipo: Boolean
//Tipado Explicito
var isPro;
isPro = true;
//Tipo Inferido
var isUserPro = false;
isUserPro = true;
// String
var username = 'danielvaldivv';
username = 'Daniel';
//Template String
//Uso de back-tick `
var userInfo;
userInfo = "\nUser Info:\nusername: " + username + "\nfirstName: " + (username + 'Valdivieso') + "\nphone: " + phone + "\nisPro: " + isPro + "\n";
console.log('userInfo', userInfo);
