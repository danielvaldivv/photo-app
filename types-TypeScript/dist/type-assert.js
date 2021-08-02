"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <> // Angle Bracket syntax
var username;
username = 'danielvaldivv';
username = 'dani';
// tenemos una cadena, TS confia en mí
var message = username.length > 5
    ? "Welcome " + username
    : 'username is too short';
console.log('message: ', message);
var usernameWithId = 'dvaldivieso 1';
// Como obtener el username ? 
username = usernameWithId.substring(0, 11);
console.log('username: ', username);
// Syntax 'as'
message = username.length > 5
    ? "Welcome " + username
    : 'username is too short';
console.log('message: ', message);
var helloUser;
helloUser = 'Hello danielel';
username = helloUser.substring(6);
console.log(username);
