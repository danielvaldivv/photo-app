export{};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//get y set

//SuperClass
abstract class Item { //abstract hace que no se puedan crear objetos a partir de esta super clase, pues la super clase esta creada para heredar más no para crear objetos.
    protected readonly _id: number;  //si se utiliza private no se puede heredar
    protected _title: string; //Es por esto que en esta parte se usa protected

    constructor(id:number, title:string) {
        this._id =id;
        this._title = title;
    }

    get id() {
        return this._id
    }
    // set id(id:number) {  //readonly
    //     this._id = id;
    // }

    get title() {
        return this._title;
    }
    set title(title:string) {
        this._title = title;
    }
}

class Picture extends Item{
    public static photoOrientation = PhotoOrientation; //Miembro estatico, continua en linea 103
    //Propiedades
    private _orientation: PhotoOrientation;

    public constructor(
        id: number,
        title: string,
        orientation: PhotoOrientation) {
            super(id, title); // super permite traer los parametros del constructor de la Super Clase. Se pueden traer todos los parametros o los que se requieran.
            this._orientation = orientation;
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

class Album extends Item{
    private picture: Picture[];

    public constructor (id: number, title:string) {
        super(id, title);
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
console.log('picture.id:', picture.id); //get id()


// picture.id = 100; // private, set id(100)// no deja modificar por ser readonly
picture.title = 'Another title'; // PRIVADO
album.title = 'Personal Activities';
console.log('album: ', album);

//No tiene sentido que se cree una instancia de la super clase. La super clase esta diseñada para heredar propiedades, contructor y metedos más no para crear instancias directas.
// const item = new Item(3123, 'Test title');
// console.log('item: ' item);

//Prueba de miembro estatico
console.log('PhotoOrientation: ', Picture.photoOrientation.Landscape);
