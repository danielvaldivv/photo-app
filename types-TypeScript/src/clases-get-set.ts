export{};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//get y set



class Picture {
    //Propiedades
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(
        id: number,
        title: string,
        orientation: PhotoOrientation) {
            this._id = id;
            this._title = title;
            this._orientation = orientation;
        }

        get id() {
            return this._id
        }
        set id(id:number) {
            this._id = id;
        }

        get title() {
            return this._title;
        }
        set title(title:string) {
            this._title = title;
        }
        get orientation() {
            return this._orientation;
        }
        set orientation(o: PhotoOrientation) {
            this._orientation = o;
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
    private _id: number;
    private _title: string;
    private picture: Picture[];

    public constructor (id: number, title:string) {
        this._id = id;
        this._title = title;
        this.picture = [];
    }

    get id() {
        return this._id
    }
    set id(id:number) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title:string) {
        this._title = title;
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
console.log('picture.id:', picture.id); //get id()


picture.id = 100; // private, set id(100)
picture.title = 'Another title'; // PRIVADO
album.title = 'Personal Activities';
console.log('album: ', album);