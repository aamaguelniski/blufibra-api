import jwt from 'jsonwebtoken';

import  User from '../models/Usuario';
import authConfig from '../../config/auth';

class SessionController {
    async store(req, res){
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } });

        if(!user){
            return res.status(401).json({ error: "User not found." });
        }

        if(!(await user.checkPassword(password))){
            return res.status(401).json( { error: "Password doesn't match." });
        }

        const { id } = user;

        return res.json({
            user: { id, username, password },
            token : jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.expires, }),
        });        
    }
}

export default new SessionController();