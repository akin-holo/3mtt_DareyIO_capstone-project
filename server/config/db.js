import mongoose from "mongoose";

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifieldTopology: true,
         ssl: true,
         tks: true,
         serverSelectionTimeoutMS: 5000,
      });
      console.log(`MongoDB connected: ${conn.connection.host}`);
   } catch (err) {
      console.error(err.message);
      process.exit(1);
   }
};

export default connectDB;