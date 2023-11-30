import mongoose from "mongoose";

async function conecta() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}

export default conecta;
