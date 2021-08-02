import { User } from "./user";
import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";


const user1 = new User(1, 'danielvaldivv', 'Daniel', true);
const album = new Album(15481, 'Platzi Pictures');
const picture = new Picture(1, 'TypeScript Course', '2021-01-02', PhotoOrientation.Landscape);

user1.addAlbum(album);
album.addPicture(picture);

console.log('user1: ', user1);


//Borrando Album
user1.removeAlbum(album);

console.log('user1: ', user1);

