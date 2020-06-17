import jwt from 'jsonwebtoken';

import User from '../models/Usuario';
import Cliente from '../models/Cliente';
import PessoaFisica from '../models/PessoaFisica';
import PessoaJuridica from '../models/PessoaJuridica';

import authConfig from '../../config/auth';

class SessionController {
    async store(req, res){
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } });

        if(!user){
            return res.status(401).json({ error: "Usuário não encontrado" });
        }

        if(!(await user.checkPassword(password))){
            return res.status(401).json( { error: "Senha incorreta" });
        }

        const { id } = user;

        // const colaborador = Colaborador.findOne({
        //     where: {
        //         usuario_id: id
        //     }
        // });

        // if (colaborador)

        const cliente = Cliente.findOne({
            where: {
                usuario_id: id
            }
        });

        if (cliente){
            const pessoa_fisica = PessoaFisica.findOne({
                where: {
                    cliente_id: cliente.id
                }
            });

            if (pessoa_fisica){
                const {
                    primeiro_nome, 
                    ultimo_nome, 
                    cpf, 
                    rg, 
                    data_nascimento, 
                    nome_pai, 
                    nome_mae
                } = pessoa_fisica;

                return res.json({
                    user: {
                        pessoa_fisica: {
                            username, 
                            password,
                            primeiro_nome,
                            ultimo_nome,
                            cpf,
                            rg,
                            data_nascimento,
                            nome_pai,
                            nome_mae
                        }
                    },
                    token: jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.expires, }),
                });  
            }

            const pessoa_juridica = PessoaJuridica.findOne({
                where: {
                    cliente_id: cliente.id
                }
            });

            if (pessoa_juridica){
                const {
                    razao_social,
                    nome_fantasia,
                    cnpj,
                    ie
                } = pessoa_juridica;

                return res.json({
                    user: {
                        pessoa_juridica: {
                            username,
                            password,
                            razao_social,
                            nome_fantasia,
                            cnpj,
                            ie
                        }
                    },
                    token: jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.expires, }),
                });  
            }
        }

        // return res.json({
        //     user: { id, username, password },
        //     token: jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.expires, }),
        // });
    }
}

export default new SessionController();