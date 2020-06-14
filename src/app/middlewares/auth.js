import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
    const Auth = req.headers.authorization;

    if(!Auth){
        return res.status(401).json({ error: 'Token not provided.' });
    }

    const [,token] = Auth.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.user_id = decoded.id;
        return next();
    } catch(err){
        return res.status(401).json({ error: 'Token is invalid.'});
    }
}