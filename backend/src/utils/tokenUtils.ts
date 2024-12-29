import jwt from 'jsonwebtoken';

export const generateToken = (data:object,expiresIn:string)=> {
    const token = jwt.sign(data,'mysecretkey',{expiresIn:'30m'});
    return token;
}