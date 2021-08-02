console.log('Hola nuevamente');
console.log('Prueba de guardado')

//Number
//Explicito
let phone: number;
phone = 53256457;
// phone = 'hola' //Error

//Inferido
let phoneNumber = 542342562;
phoneNumber = 123;
// let phoneNumber = 'fjnwf'; //Error

let hex: number = 0xf00d;
let binary:number = 0b1010;
let octal: number = 0o744;

//Tipo: Boolean
//Tipado Explicito
let isPro: boolean;
isPro = true;

//Tipo Inferido
let isUserPro = false;
isUserPro = true;

// String
let username: string = 'danielvaldivv';
username = 'Daniel';

//Template String
//Uso de back-tick `
let userInfo: string;
userInfo = `
User Info:
username: ${username}
firstName: ${username + 'Valdivieso'}
phone: ${phone}
isPro: ${isPro}
`;

console.log('userInfo', userInfo);

