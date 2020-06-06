import { Router } from 'express';

import TipoUsuario from './app/models/TipoUsuario';

const routes = new Router();

routes.get('/', async (req, res) => {
   const tipo_usuario = await TipoUsuario.create({
      descricao: 'Consultor de vendas',
   });
   
   return res.json(tipo_usuario);
})

export default routes;