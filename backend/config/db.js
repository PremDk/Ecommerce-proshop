import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(
      `Mongo DB connected: ${conn.connection.host}`.brightYellow.underline.bold
        .bgBlack
    );
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
