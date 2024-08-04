import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://plapbook:8FU0ab3ZcxydqhwT@cluster0.7u73nag.mongodb.net/food-del').then(() => console.log("DB Connected"));
}

