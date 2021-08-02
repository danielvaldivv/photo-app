"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Picture_id, _Picture_title, _Picture_orientation, _Album_id, _Album_title, _Album_picture;
Object.defineProperty(exports, "__esModule", { value: true });
//TypeScript 3.8
// Al utilizar # permite potenciar el encapsulamiento y potenciar el private anteriormente utilzado. En el caso de # no permite observar las propiedades que tienen las clases.
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        //Propiedades
        _Picture_id.set(this, void 0);
        _Picture_title.set(this, void 0);
        _Picture_orientation.set(this, void 0);
        __classPrivateFieldSet(this, _Picture_id, id, "f");
        __classPrivateFieldSet(this, _Picture_title, title, "f");
        __classPrivateFieldSet(this, _Picture_orientation, orientation, "f");
    }
    //comportamiento
    Picture.prototype.toString = function () {
        return "\n            id: " + __classPrivateFieldGet(this, _Picture_id, "f") + ",\n            title: " + __classPrivateFieldGet(this, _Picture_title, "f") + ",\n            orientation: " + __classPrivateFieldGet(this, _Picture_orientation, "f") + "\n            ";
    };
    return Picture;
}());
_Picture_id = new WeakMap(), _Picture_title = new WeakMap(), _Picture_orientation = new WeakMap();
var Album = /** @class */ (function () {
    function Album(id, title) {
        _Album_id.set(this, void 0);
        _Album_title.set(this, void 0);
        _Album_picture.set(this, void 0);
        __classPrivateFieldSet(this, _Album_id, id, "f");
        __classPrivateFieldSet(this, _Album_title, title, "f");
        __classPrivateFieldSet(this, _Album_picture, [], "f");
    }
    Album.prototype.addPicture = function (picture) {
        __classPrivateFieldGet(this, _Album_picture, "f").push(picture);
    };
    return Album;
}());
_Album_id = new WeakMap(), _Album_title = new WeakMap(), _Album_picture = new WeakMap();
var album = new Album(1, 'Personal Pictures');
var picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
//Accediendo a los miembros publicos
// picture.id = 100; // ERROR PRIVADO!
// picture.title = 'Another title'; // PRIVADO
// album.title = 'Personal Activities';
console.log('album: ', album);
