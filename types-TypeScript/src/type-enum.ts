// Orientacion para fotografias

//Forma clasica de usar JS
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape: ', landscape);
console.log('landscape', PhotoOrientation[0])
console.log('landscape', PhotoOrientation[1])
console.log('landscape', PhotoOrientation[2])
console.log('landscape', PhotoOrientation[3])

console.group('PhotoOrientation')
// console.log(typeof(PhotoOrientation));
console.log(PhotoOrientation);
console.groupEnd;

enum PictureOrientation {
    Landscape = 10,
    Portrait,
    Square,
    Panorama
}
console.log(PictureOrientation)

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp'
}

const country: Country = Country.Colombia;
console.log('country: ', country);