const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true}
        );
    } catch (err) {
        console.log("Error connecting to mongodb")
        console.error(err)
    }  
} 

module.exports = { connect } 