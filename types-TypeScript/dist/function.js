"use strict";
// Crear una Fotografía
// function createPicture(title, date, size) {
//title // esta será de tipo any
// }
// function createPicture(title:string, date:string, size:SquareSize){
//     //Se crea la fotografia
//     console.log('Create picture using: ', title, date, size);
// }
// createPicture('danielPlaya', '14/mar/2020', '500x500');
// createPicture('Colombia Trip', '2020-03-20', '');
//Parametros opcionales
function createPicture(title, date, size) {
    //Se crea la fotografia
    console.log('Create picture using: ', title, date, size);
}
createPicture('danielPlaya', '14/mar/2020', '500x500');
createPicture('Colombia Trip', '2020-03-20');
//Flat array function
var createPic = function (title, date, size) {
    // return {
    //     title: title,
    //     date: title,
    //     size: size
    // }
    return { title: title, date: date, size: size };
};
var picture = createPic('Platzi session', '2020-03-20', '500x500');
console.log(picture);
// console.log(picture[0]); //no se puede acceder como si fuera una instancia puesto que es un objeto literal (JSON)
//Tipo de retorno con TypeScript
function handleError(code, message) {
    //Procesamiento del codigo, mensaje
    if (message === 'error!') {
        throw new Error(message + ". Code Error: " + code);
    }
    else {
        return 'An error has occured';
    }
}
try {
    var result = handleError(200, 'OK');
    console.log('result: ', result);
    result = handleError(404, 'error!');
    console.log('result: ', result);
}
catch (error) {
}
