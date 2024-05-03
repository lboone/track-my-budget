import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_DATABASE_URL ||
        "mongodb+srv://lloydaboone:AuntDixie123@cluster0.6gydixr.mongodb.net/track-my-budget"
    );
  } catch (error) {
    console.log(error);
  }
};


