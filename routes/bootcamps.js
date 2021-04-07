const express=require("express");
const { createServer } = require("http");
const router=express.Router();
const {getBootcamps
    ,createBootcamps,
    updateBootcamps,
    deleteBootcamps}=require('../controllers/bootcamps');


router.route('/').get(getBootcamps).post(createBootcamps);

router.route('/:id')
    .get(getBootcamps)
    .put(updateBootcamps)
    .delete(deleteBootcamps)
    ;

module.exports=router;