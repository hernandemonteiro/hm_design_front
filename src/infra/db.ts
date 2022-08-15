import mongoose from "mongoose";

class Database {
    private DB_URL = "mongodb+srv://monteirops:Frangofrito23.@hm-design.2pm6n7h.mongodb.net/?retryWrites=true&w=majority";

    createConnection() {

        mongoose.connect(this.DB_URL);
        
    }
}

export default Database;