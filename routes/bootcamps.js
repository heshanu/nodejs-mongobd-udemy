const express=require('express');
const router=express.Router();

app.get('/api/v1/bootcamps',(req,res)=>{
    res.sendStatus(200).json({success:true,msg:'Show all bootcamps'});
    res.send
})

app.get('/api/v1/bootcamps/:id',(req,res)=>{
    res.status(200).json({success:true,msg:`show bootcamp ${request.params.id}`});
})

app.post('/api/v1/bootcamps',(req,res)=>{
    res.status(200).json({success:true,msg:'create new bootcamp'});
})

app.put('/api/v1/bootcamps/:id',(req,res)=>{
    res.status(200).json({success:true,msg:`Update bootcamp ${request.params.id}`});
})

app.delete('/api/v1/bootcamps/:id',(req,res)=>{
    res.status(200).json({success:true,msg:`delete bootcamp ${request.params.id}`});
})

