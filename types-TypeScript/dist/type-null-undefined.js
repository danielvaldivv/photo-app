"use strict";
// Explicita
var nullVariable;
nullVariable = null;
// nullVariable = 1; 
var otherVariable = null;
otherVariable = 'test';
console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);
//Undefined
var undefinedVariable = undefined;
// undefined = 'test' //Error!
var otherUndefined = undefined;
otherUndefined = 1;
// console.log('undefinedVariable:' undefinedVariable);
// console.log('otherUndefined:' otherUndefined);
//Null y Undefined: como subtipos
// --strictNullChecks
var albumName;
// albumName = null;
// albumName = undefined;
