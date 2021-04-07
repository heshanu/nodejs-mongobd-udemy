exports.getBootcamps=(req,res,next)=>{
    res.sendStatus(200)
    .json({success:true,msg:'Show all bootcamps'});
}

exports.getBootcamps=(req,res,next)=>{
    res.sendStatus(200)
    .json({success:true,msg:`Show bootcamps ${req.params.id}`});
}

exports.createBootcamps=(req,res,next)=>{
    res.sendStatus(200)
    .json({success:true,msg:'bootcamp created!'});
}

exports.updateBootcamps=(req,res,next)=>{
    res.sendStatus(200)
    .json({success:true,msg:`update bootcamp ${req.params.id}`});
}

exports.deleteBootcamps=(req,res,next)=>{
    res.sendStatus(200)
    .json({success:true,msg:`Delete bootcamp ${req.params.id}`});
}