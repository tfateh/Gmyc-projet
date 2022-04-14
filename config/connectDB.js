const mongoose = require("mongoose");

const connectDB = async ()=>{
try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log(`Data Base Connected Successfuly`);
} catch (error) {
    
    console.log(`Data Base Connected FAILED`);
}
}
module.exports= connectDB;