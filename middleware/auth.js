import jwt from 'jsonwebtoken'


const auth=(req,res,next)=>{

    const token=req.header("auth-token");


    if(!token){
        return res.status(401).json({msg:"Login Required"})
    }

    try{
        const decoded=jwt.verify(token,process.env.jwt_token);
        req.user=decoded;
        
        next();

    }catch(err){
        res.status(401).json({msg:"Token is Invalid"})
    }
}

export default auth