export{};

//TypeScript 3.8
// Al utilizar # permite potenciar el encapsulamiento y potenciar el private anteriormente utilzado. En el caso de # no permite observar las propiedades que tienen las clases.
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Propiedades
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;

    public constructor(
        id: number,
        title: string,
        orientation: PhotoOrientation) {
            this.#id = id;
            this.#title = title;
            this.#orientation = orientation;
        }

        //comportamiento
        public toString(){
            return `
            id: ${this.#id},
            title: ${this.#title},
            orientation: ${this.#orientation}
            `
        }
}

class Album {
    #id: number;
    #title: string;
    #picture: Picture[];

    public constructor (id: number, title:string) {
        this.#id = id;
        this.#title = title;
        this.#picture = [];
    }

    public addPicture(picture:Picture) {
        this.#picture.push(picture)

    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture (1,'Platzi session',

PhotoOrientation.Square);
album.addPicture(picture);

console.log('album', album);


//Accediendo a los miembros publicos
// picture.id = 100; // ERROR PRIVADO!
// picture.title = 'Another title'; // PRIVADO
// album.title = 'Personal Activities';
console.log('album: ', album);