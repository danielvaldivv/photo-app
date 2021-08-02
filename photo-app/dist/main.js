"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const album_1 = require("./album");
const photo_orientation_1 = require("./photo-orientation");
const picture_1 = require("./picture");
const user1 = new user_1.User(1, 'danielvaldivv', 'Daniel', true);
const album = new album_1.Album(15481, 'Platzi Pictures');
const picture = new picture_1.Picture(1, 'TypeScript Course', '2021-01-02', photo_orientation_1.PhotoOrientation.Landscape);
user1.addAlbum(album);
album.addPicture(picture);
console.log('user1: ', user1);
//Borrando Album
user1.removeAlbum(album);
console.log('user1: ', user1);
