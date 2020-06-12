import Base from '../models/Base';
import { json } from 'sequelize';

class BaseController {
    async store(req, res) {
        const base = await Base.create(req.body);
        return res.json(base);
    }
}

export default new BaseController();