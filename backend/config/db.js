import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('My MongoDb Link Url').then(() => console.log("DB Connected"));
}

