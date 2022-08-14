export class Product {
    
    _name: string;
    _price: string;
    _description: string;
    _image: string;

    constructor(
        name: string,
        price: string,
        description: string,
        image: string){

        this._name = name;
        this._price = price;
        this._description = description;
        this._image = image;

        Object.freeze(this);

    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }

    get description(){
        return this._description;
    }

    get image(){
        return this._image;
    }
}