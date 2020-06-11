import jwt from 'jsonwebtoken';

import  User from '../models/Usuario';

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
            token : jwt.sign({ id }, '6f59128c66c58582d663a85c0e5c8ef3', { expiresIn: '7d', }),
        });
        
    }
}

export default new SessionController();