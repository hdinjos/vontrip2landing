'use strict'

const User = use('App/Models/User');

class UserController {
  async index({ view, auth }) {
    const users = await User.all();
    const activeUser = await auth.getUser();
    return view.render('dashboard/users/index', {
      users: users.rows.filter(user => user.email !== activeUser.email),
    });
  }

  async show({ view, request }) {
    const { id } = request.params;
    const user = await User.where('_id', id).first();
    let page = '_errors/404.edge';

    if (!!user) {
      page = 'dashboard/users/detail';
    }

    return view.render(page, {
      user,
    });
  }
}

module.exports = UserController
