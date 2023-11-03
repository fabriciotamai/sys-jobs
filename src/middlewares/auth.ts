import jwt from 'jsonwebtoken';



const authenticationMiddleware = async(request, reply) => {
    const token = request.headers['authorization']

    if(!token){
        reply.status(401).send({message:'Authentication token is required'})
    }


    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        request.user = decoded;
    }catch(e){
        reply.status(403).send({message:'Invalid or expired token'})
    }
}
