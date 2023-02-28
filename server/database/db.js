import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const Connection = async (username, password) => {
  /*   const URLa = `mongodb+srv://${username}:${password}@cluster0.q7veg.mongodb.net/react_basic_crud`; */

  const URL = `mongodb+srv://kavezo:hepuka@cluster0.q7veg.mongodb.net/kavezo`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
