
import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path:'./env'
})

connectDB()











// ;( async()=>{

//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
//     } catch (error) {
//         console.error("Error: " , error);
//         throw error
        
//     }
// } )()

