const mongoose=require("mongoose")

const connectDatabase=()=>{
mongoose.connect(process.env.DB_URL).then((data)=>{
    console.log('MongoDb coneected with server');
}).catch((err)=>{
    console.log(err);
})
}

module.exports=connectDatabase