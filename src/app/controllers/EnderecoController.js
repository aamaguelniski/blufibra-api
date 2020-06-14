import Endereco from '../models/Endereco';

class EnderecoController {
    async store(req, res){
        const { id, endereco, bairro, cidade_id, numero, referencia, cep, tipo_contato_id, client_id} = await Endereco.create(req.body);

        return res.json({ id, endereco, bairro, cidade_id, numero, referencia, cep, tipo_contato_id, client_id});
    }

    async update(req, res){
        const { addressId } = req.body;

        const address = await Endereco.findByPk(addressId);

        if(!address){
            return res.status(401).json({ error: 'Address not found.'});
        }

        const { id, endereco, bairro, cidade_id, numero, referencia, cep, tipo_contato_id, client_id} = await address.update(req.body);

        return res.json({ id, endereco, bairro, cidade_id, numero, referencia, cep, tipo_contato_id, client_id});
    }

    async delete(req, res){
        const { addressId } = req.body;

        const result = await Endereco.destroy({ where: { id: addressId }});

        if(result){
            return res.json({ message: 'Successfuly deleted.'});
         } else {
            return res.json({ message: 'Failed to delete.'});
         }
    }
}

export default new EnderecoController();