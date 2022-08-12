import mongoose from "mongoose";

//This db.js used to set up connection with mongodb atlas 
// with the help of mongoose.connect

const Connection = async (DB_USERNAME, DB_PASSWORD) => {
  try {
    const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@clone-inshort.ixttsgn.mongodb.net/INSHORT-CLONE?retryWrites=true&w=majority`;
    // mongoose.connect(URL,{});
    //await mongoose.connect(URL, { useNewUrlParser: true })
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to DB", error);
  }
};

export default Connection;
