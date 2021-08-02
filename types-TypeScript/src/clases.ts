export{};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Propiedades
    public id: number;
    public title: string;
    public orientation: PhotoOrientation;

    public constructor(
        id: number,
        title: string,
        orientation: PhotoOrientation) {
            this.id = id;
            this.title = title;
            this.orientation = orientation;
        }

        //comportamiento
        public toString(){
            return `
            id: ${this.id},
            title: ${this.title},
            orientation: ${this.orientation}
            `
        }
}

class Album {
    public id: number;
    public title: string;
    public picture: Picture[];

    public constructor (id: number, title:string) {
        this.id = id;
        this.title = title;
        this.picture = [];
    }

    public addPicture(picture:Picture) {
        this.picture.push(picture)

    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture (1,'Platzi session',

PhotoOrientation.Square);
album.addPicture(picture);

console.log('album', album);


//Accediendo a los miembros publicos
picture.id = 100; // public
picture.title = 'Another title'; // Public
album.title = 'Personal Activities';
console.log('album: ', album);

