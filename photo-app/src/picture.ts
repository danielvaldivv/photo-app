import { Item } from "./item";
import { PhotoOrientation } from "./photo-orientation";

export class Picture extends Item{
    public static photoOrientation = PhotoOrientation; //Miembro estatico, continua en linea 103
    //Propiedades
    private _orientation: PhotoOrientation;

    public constructor(
        id: number,
        title: string,
        date: string,
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
            orientation: ${this._orientation}
            `
        }
}