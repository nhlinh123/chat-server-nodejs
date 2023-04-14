const mongoose = require('mongoose').default; // webstorm: add .default to Unresolved function or method connect() ???

const connectDB = async function() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected to database');
    } catch (e) {
        console.log(e);
        console.log('retry in 5s');
        setTimeout(() => {
            connectDB();
        }, 5000);
    }
}
module.exports = connectDB();
