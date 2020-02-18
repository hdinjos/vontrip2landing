'use strict'

class DashboardController {
  async index({ view, auth }) {
    return view.render('dashboard/index', {
      title: 'Dashboard',
    });
  }

  async profile({ view, auth }) {
    const activeUser = await auth.getUser();

    return view.render('dashboard/users/detail', {
      user: activeUser,
    });
  }
}

module.exports = DashboardController
