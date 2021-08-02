"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const item_1 = require("./item");
const photo_orientation_1 = require("./photo-orientation");
class Picture extends item_1.Item {
    constructor(id, title, date, orientation) {
        super(id, title); // super permite traer los parametros del constructor de la Super Clase. Se pueden traer todos los parametros o los que se requieran.
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o) {
        this._orientation = o;
    }
    //comportamiento
    toString() {
        return `
            id: ${this.id},
            title: ${this.title},
            orientation: ${this._orientation}
            `;
    }
}
exports.Picture = Picture;
Picture.photoOrientation = photo_orientation_1.PhotoOrientation; //Miembro estatico, continua en linea 103
