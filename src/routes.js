import { Router } from 'express';

//IMPORTAÇÃO DE CONTROLLERS
//------------------------------------------------------------------------------
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
import TelefoneController from './app/controllers/TelefoneController';
import EmailController from './app/controllers/EmailController';
import ColaboradorController from './app/controllers/ColaboradorController';

//IMPORTAÇÃO DE MIDLEWARES
//------------------------------------------------------------------------------
import authMidleware from './app/middlewares/auth';
import userMidleware from './app/middlewares/createUser';

const routes = new Router();

// CREATION ROUTES
// -----------------------------------------------------------------------------
routes.post('/session', SessionController.store);
// Tipos de usuário
routes.post('/user', UsuarioController.store);


// Rotas com middleware de autenticação
routes.use(authMidleware);
routes.post('/usertype', TipoUsuarioController.store);
routes.post('/legalperson', PessoaJuridicaController.store);
routes.post('/client', ClienteController.store);
routes.post('/person', PessoaFisicaController.store);
routes.post('/contactype', TipoContatoController.store);
routes.post('/city', CidadeController.store);
routes.post('/bases', BaseController.store);
routes.post('/address', EnderecoController.store);
routes.post('/phone', TelefoneController.store);
routes.post('/email', EmailController.store);
routes.post('/collaborator', userMidleware, ColaboradorController.post);

// UPDATE ROUTES
// -----------------------------------------------------------------------------
routes.put('/user', UsuarioController.update);
routes.put('/usertype', TipoUsuarioController.update);
routes.put('/contactype', TipoContatoController.update);
routes.put('/legalperson', PessoaJuridicaController.update);
routes.put('/person', PessoaFisicaController.update);
routes.put('/address', EnderecoController.update);
routes.put('/phone', TelefoneController.update);
routes.put('/email', EmailController.update);

// DELETE ROUTES
// -----------------------------------------------------------------------------
routes.delete('/user', UsuarioController.delete);
routes.delete('/usertype', TipoUsuarioController.delete);
routes.delete('/contactype', TipoContatoController.delete);
routes.delete('/legalperson', PessoaJuridicaController.delete);
routes.delete('/person', PessoaFisicaController.delete);
routes.delete('/address', EnderecoController.delete);
routes.delete('/phone', TelefoneController.delete);
routes.delete('/email', EmailController.delete);

export default routes;