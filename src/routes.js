import { Router } from 'express';

import UsuarioController from './app/controllers/UsuarioController';
import SessionController from './app/controllers/SessionController';
import TipoUsuarioController from './app/controllers/TipoUsuarioController';
import PessoaJuridicaController from './app/controllers/PessoaJuridicaController';
import ClienteController from './app/controllers/ClienteController';
import PessoaFisicaController from './app/controllers/PessoaFisicaController';
import TipoContatoController from './app/controllers/TipoContatoController';
import CidadeController from './app/controllers/CidadeController';
import BaseController from './app/controllers/BaseController';
import EnderecoController from './app/controllers/EnderecoController';

const routes = new Router();

// ROTAS DE CRIAÇÃO 
// --------------------------------------------------------//
routes.post('/session', SessionController.store);
routes.post('/user', UsuarioController.store);
routes.post('/usertype', TipoUsuarioController.store);
routes.post('/legal_person', PessoaJuridicaController.store);
routes.post('/client', ClienteController.store);
routes.post('/person', PessoaFisicaController.store);
routes.post('/contactype', TipoContatoController.store);
routes.post('/city', CidadeController.store);
routes.post('/bases', BaseController.store);
routes.post('/address', EnderecoController.store);

export default routes;