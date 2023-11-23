import mongoose from "mongoose";

// const Url: string = "mongodb+srv://josephine:josephine@cluster0.kckuw8r.mongodb.net/db?retryWrites=true&w=majority";
// const Url: string = "mongodb://127.0.0.1:27017/saleQTYDB";
// const Url: string =  "mongodb://0.0.0.0:27017/dbs";
const Url: string =   "mongodb+srv://josephine:josephine@cluster0.v1d2dga.mongodb.net/e-sales?retryWrites=true&w=majority";

export const mainConnection = async () => {
    await mongoose.connect(Url).then(() => {
        console.log("DB has finally been connected")
    })
}

