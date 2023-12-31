import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to MongoDB.");
  } catch (error) {
    console.log("Error to connect to MongoDB.", error.message);
  };
};

export default connectMongoDB;