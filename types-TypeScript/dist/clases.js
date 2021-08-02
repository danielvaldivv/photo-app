"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //comportamiento
    Picture.prototype.toString = function () {
        return "\n            id: " + this.id + ",\n            title: " + this.title + ",\n            orientation: " + this.orientation + "\n            ";
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        this.id = id;
        this.title = title;
        this.picture = [];
    }
    Album.prototype.addPicture = function (picture) {
        this.picture.push(picture);
    };
    return Album;
}());
var album = new Album(1, 'Personal Pictures');
var picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
//Accediendo a los miembros publicos
picture.id = 100; // public
picture.title = 'Another title'; // Public
album.title = 'Personal Activities';
console.log('album: ', album);
