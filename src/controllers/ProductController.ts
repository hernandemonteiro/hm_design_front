const mongoose = require("mongoose");
import { Product } from "../models/Product";

export class ProductController {

   constructor(){

    this.connectMongoose;
    Object.freeze(this);

   }

    getAllProducts(){

    }

    getProductById(id: number){

    }

    getProductByName(name: string){

    }

    registerProduct(name: string, price: string,
        description: string, image: string){
        
            this.connectMongoose();
            const product: any = mongoose.model('Products', Product);
            const productNew: any = new product(name, price, description, image); 
            productNew.save().then(() => alert('salvo com sucesso!'));
    }

    deleteProduct(id: number){

    }

    updateProduct(){

    }

    connectMongoose(){
        mongoose.connect('mongodb+srv://monteirops:Frangofrito23.@hm-design.2pm6n7h.mongodb.net/?retryWrites=true&w=majority');
    }

    
}