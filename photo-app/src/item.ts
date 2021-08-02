export abstract class Item { //abstract hace que no se puedan crear objetos a partir de esta super clase, pues la super clase esta creada para heredar más no para crear objetos.
    protected readonly _id: number;  //si se utiliza private no se puede heredar
    protected _title: string; //Es por esto que en esta parte se usa protected

    constructor(id:number, title:string) {
        this._id =id;
        this._title = title;
    }

    get id() {
        return this._id
    }

    get title() {
        return this._title;
    }
    set title(title:string) {
        this._title = title;
    }
}