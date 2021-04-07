const express=require("express");
const dotenv=require("dotenv");
dotenv.config({path:'./config/config.env'})
//import bootcampjs
const bootcamps=require('./routes/bootcamps')
const morgan=require('morgan')
//load env
//dotenv.config({ path:'./config/config.env' });
const app=express();
//const express=require('express');
//const router=express.Router();
//mount routers
app.use('/api/v1/bootcamps',bootcamps);

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

const PORT=process.env.PORT||5002;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});