const express=require("express")
const cors=require("cors")

const {connection}=require("./db")


const {usersRouter}=require("./router/users.router")
const {postsRouter}=require("./router/posts.router")
require("dotenv").config()

const {auth}=require("./middleware/auth.middleware")


const app=express()

app.use(express.json())
app.use(cors())
app.use("/users",usersRouter)
app.use(auth)
app.use("/posts",auth,postsRouter)


app.listen(process.env.port,async(res,err)=>{
    try{
        await connection
        
        console.log("connected to db 5511");


    }catch(err){
        console.log(err);
    }
    console.log(`server is running at the port:${process.env.port}`);
})