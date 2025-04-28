import mongoose from 'mongoose';


export default function initDb() {
  mongoose.connect(process.env.MONGODB_URI
  ).then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));
}
