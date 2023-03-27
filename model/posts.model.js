const mongoose=require("mongoose")
const postsSchema=mongoose.Schema({
title:String,
body:String,
device:String,
no_of_comments:Number,
},{
    versionKey:false
}
)


const postsModel=mongoose.model("post",postsSchema)

module.exports={
    postsModel
}