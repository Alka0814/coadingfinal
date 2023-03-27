const mongoose=require("mongoose")
const connection =mongoose.connect("mongodb+srv://alka:alkatrivedi@cluster0.vbeiq8d.mongodb.net/evalution?retryWrites=true&w=majority")

require("dotenv").config()


module.exports={connection}