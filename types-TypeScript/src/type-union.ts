export {}
// 10, '10'
// let idUser: number | string ; 
// idUser = 10;
// idUser = '10';

// // Buscar username dado un ID
// function getUsernameById(id: number | string){
//     //logica de negocio
//     return 'danielvaldivv'
// }

// getUsernameById(10);
// getUsernameById('20');

//Alias de Tipos: TS
type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUsernameById(id: IdUser): Username{
    //logica de negocio
    return 'danielvaldivv'
}
getUsernameById(10);
getUsernameById('20');


//Tipos Literales
//Tamaños de Fotografias permitidas
// 100x100 500x500 1000x1000


type SquareSize = '100x100' | '500x500' | '1000x1000';
let smallPicture: SquareSize = '500x500'
