const jwt=require('jsonwebtoken');
const verifyToken =(req,res,next)=>{
    const token=req.headers.authorization?.split('')[1];
    if(!token) return res.status(401).json({message:'Unauthorized'});
    try{
        const decoded =jwt.verify(token,'your_secret_key');
        req.user=decoded;
        next();
    }catch(error){
        return res.status(403).json({message:'Invalid token'});

    }
}
module.export={verifyToken};