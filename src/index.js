
import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port :${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed !!!",err);
})











// ;( async()=>{

//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
//     } catch (error) {
//         console.error("Error: " , error);
//         throw error
        
//     }
// } )()

