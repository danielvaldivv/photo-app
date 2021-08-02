// Type: object
let user: object;
user = {};//Object
user = {
    id: 1,
    username: 'danielvaldivv',
    firstName: 'daniel',
    isPro: true
}

console.log('user: ', user);
// Object vs object (Clase JS vs tipo TS)
const myObj = {
    id: 1,
    username: 'danielvaldivv',
    firstName: 'daniel',
    isPro: true
};

const isInstance = myObj instanceof Object; //clase object JavaScript
console.log('isInstance: ', isInstance);
console.log('myObj.username: ', myObj.username)

