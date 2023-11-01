import mongoose from "mongoose";


const connectUrl: string ="mongodb+srv://josephine:josephine@cluster0.kckuw8r.mongodb.net/db?retryWrites=true&w=majority";

export const dbConfig = () => {
  mongoose.connect(connectUrl).then(() => {
    console.log(`Database is connected`);
  });
};
