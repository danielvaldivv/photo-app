export{}
// <> // Angle Bracket syntax
let username: any;
username = 'danielvaldivv';
username = 'dani';

// tenemos una cadena, TS confia en mí
let message: string = (<string>username).length > 5
    ? `Welcome ${username}`
    :'username is too short';

console.log('message: ', message);

let usernameWithId: any = 'dvaldivieso 1';
// Como obtener el username ? 
username = (<string>usernameWithId).substring(0, 11);
console.log('username: ', username)

// Syntax 'as'

message = (username as string).length > 5
    ? `Welcome ${username}`
    :'username is too short';

console.log('message: ', message);

let helloUser: any;
helloUser = 'Hello danielel';
username = (helloUser as string).substring(6);

console.log(username)