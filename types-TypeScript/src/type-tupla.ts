export {};

// [1, 'user]
let user: [number, String];
user = [1, 'danielvaldivv'];

console.log('user: ', user);
console.log('username: ', user[1]);
console.log('username.length: ', user[1].length);
console.log('id: ', user[0]);

// Tuplas con varios valores
// id username, isPro}
let userInfo: [number, string, boolean];
userInfo = [2, 'danieldaniel', true];
console.log('userInfo:', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1,'plplpl']);
array.push([2,'ldldld']);
array.push([3,'fefe']);

//Uso de funciones Array
// fefe -> fefe001

array[2][1] = array[2][1].concat('001');
console.log('array: ', array)