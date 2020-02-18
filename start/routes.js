'use strict'

const Route = use('Route')

Route.get('/', 'IndexController.index').as('root');
Route.get('/masuk', 'AuthController.login').as('masuk');
Route.get('/daftar', 'AuthController.register').as('daftar');
Route.get('/lupakatasandi', 'AuthController.forgotpassword').as('lupakatasandi');
Route.get('/keluar', 'AuthController.logout').as('keluar');

Route.post('/masuk', 'AuthController.loginsend').as('loginsend');
Route.post('/daftar', 'AuthController.registersend').as('registersend');
Route.post('/lupakatasandi', 'AuthController.forgotpasswordsend').as('forgotpasswordsend');

Route.group(() => {
  Route.get('', 'DashboardController.index').middleware(['auth']);
  Route.get('profile', 'DashboardController.profile').middleware(['auth']);

  Route.get('users', 'UserController.index').middleware(['auth']);
  Route.get('users/:id', 'UserController.show').middleware(['auth']);

  Route.get('programs', 'ProgramController.index').middleware(['auth']);
})
  .namespace('dashboard')
  .prefix('/dashboard');
