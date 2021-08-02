"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//get y set
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    Object.defineProperty(Picture.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (o) {
            this._orientation = o;
        },
        enumerable: false,
        configurable: true
    });
    //comportamiento
    Picture.prototype.toString = function () {
        return "\n            id: " + this.id + ",\n            title: " + this.title + ",\n            orientation: " + this.orientation + "\n            ";
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        this._id = id;
        this._title = title;
        this.picture = [];
    }
    Object.defineProperty(Album.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
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
console.log('picture.id:', picture.id); //get id()
picture.id = 100; // private, set id(100)
picture.title = 'Another title'; // PRIVADO
album.title = 'Personal Activities';
console.log('album: ', album);
