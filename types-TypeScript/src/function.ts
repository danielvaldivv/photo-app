// Crear una Fotografía
// function createPicture(title, date, size) {
    //title // esta será de tipo any
// }

// Usamos TS,  definimos tipos para parametros

type SquareSize = '100x100' | '500x500' | '1000x1000';

// function createPicture(title:string, date:string, size:SquareSize){
//     //Se crea la fotografia
//     console.log('Create picture using: ', title, date, size);
// }
// createPicture('danielPlaya', '14/mar/2020', '500x500');
// createPicture('Colombia Trip', '2020-03-20', '');

//Parametros opcionales

function createPicture(title?:string, date?:string, size?:SquareSize){
        //Se crea la fotografia
        console.log('Create picture using: ', title, date, size);
    }
createPicture('danielPlaya', '14/mar/2020', '500x500');
createPicture('Colombia Trip', '2020-03-20');

//Flat array function
let createPic = (title:string, date:string, size:SquareSize):object =>{
    // return {
    //     title: title,
    //     date: title,
    //     size: size
    // }

    return{title, date, size}
}

const picture = createPic('Platzi session', '2020-03-20', '500x500');

console.log(picture);
// console.log(picture[0]); //no se puede acceder como si fuera una instancia puesto que es un objeto literal (JSON)

//Tipo de retorno con TypeScript

function handleError(code:number, message:string):never | string {
    //Procesamiento del codigo, mensaje
    if(message ==='error!'){
        throw new Error(`${message}. Code Error: ${code}`)
    } else {
        return 'An error has occured';
    }
}


try {
    let result = handleError(200, 'OK');
console.log('result: ', result);

result = handleError(404, 'error!');
console.log('result: ', result);
} catch (error) {
}