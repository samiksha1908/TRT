import express from "express";
import mongoose from 'mongoose';
import router from "./routes/user-routes";


const app = express();


app.use("/api/user",router) 
mongoose
.connect('mongodb+srv://dbuser:sam098..@cluster0.auyybfy.mongodb.net/BlogretryWrites=true&w=majority'
).
then(()=>app.listen(5000))
.then(()=>
   console.log("Connected To Database and Listening to localhost 5000")
   )
   .catch((err)=>console.log(err));


