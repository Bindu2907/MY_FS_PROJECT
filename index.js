const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.get('/',(req,res)=>{
    res.send('Hello there!');
});
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
 
const MONGODB_URI = 'mongodb://127.0.0.1:27017/cms_tutorial';

mongoose.connect(MONGODB_URI,{
   useNewUrlParser:true,
   useUnifiedTopology: true,
});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDb connection error:'));
db.once('open',()=>{
    console.log('Connected to MongoDB database');
});