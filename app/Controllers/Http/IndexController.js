'use strict'

class IndexController {
  async index({ view, auth }) {
    let data = {};
    return view.render('index/landing', data);
  }
}

module.exports = IndexController
