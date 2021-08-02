//Funcion para mostrar una Fotografía
export{}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string,
    date: string,
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
        console.log(`[
            title: ${picture.title},
            date: ${picture.date},
            orientation: ${picture.orientation}]`);
}

let myPic = {
    title:'Test Title',
    date: '30-05-2020',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'Titulo',
    date: '25-07-2019',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test' //Error!
});

interface PictureConfig {
    title?: string,
    date?: string,
    orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
    const pic = {title: 'Default', date: '03-12-2021'};
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date){
        pic.date = config.date;
    }
    return pic;
}

let picture = generatePicture({});
console.log('picture:', picture);
picture = generatePicture({title:'Travel Pic'});
console.log('picture:', picture);
picture = generatePicture({title:'Travel Pic', date:'04-11-2021'})
console.log('picture:', picture);

//Interfaz: Usuario
interface User {
    readonly id: number, // solo lectura
    username: string,
    isPro: boolean
}
let user: User;
user = {
    id: 10,
    username: 'danielvaldivv',
    isPro: true
};
console.log('user:', user);
user.username = 'dvaldivieso';
// user.id = 20; //Error!
console.log('user:', user);
