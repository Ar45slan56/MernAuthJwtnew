import mongoose from "mongoose";


export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "MERN_STACK_TASK_MANAGEMENT",
    }).then(()=>{
        console.log("Database is Connected Successfully");
    }).catch(err=>{
        console.log("Some Error Occured while connecting to database!   :",err);
    })
};