const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://vishhallcheeti9:B3kyia1jZnREF1ss@cluster0.9jzx1yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' , {useNewUrlParser : true});
         console.log('Mongo DB Connection success')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }

}

module.exports = mongoose