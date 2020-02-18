'use strict'

const User = use('App/Models/User');

class AuthController {
  async login({ view, auth, response }) {
    try {
      await auth.check();
      return response.redirect('back');
    } catch (error) {
    }

    return view.render('auth/login');
  }

  async loginsend({ auth, request, response, session }) {
    const { email, password } = request.all();

    const user = await User.where({ email }).first();

    if (!user) {
      session.withErrors({ fail: 'Email tidak ditemukan atau belum terdaftar' }).flashAll();
    } else {
      const passwordValid = await user.isPasswordValid(password);
      if (!passwordValid) {
        session.withErrors({ fail: 'Password dan Email tidak cocok' }).flashAll();
      } else {
        await auth.login(user);
        return response.redirect('/');
      }
    }
    return response.redirect('back');

  }

  async logout({ auth, response }) {
    try {
      await auth.logout();
      return response.redirect('/');
    } catch (error) {
      return response.redirect('back');
    }
  }

  async register({ view, auth, response }) {
    try {
      await auth.check();
      return response.redirect('back');
    } catch (error) {
    }
    return view.render('auth/register');
  }

  async registersend({ request, response, session }) {
    const { fullname, email, hp, password } = request.all();

    const isEmailExists = await User.isExists({ email });
    if (isEmailExists) {
      // TODO: handle if email is exists
    }

    await User.create({
      fullname,
      email,
      hp,
      password
    });

    return response.redirect('masuk');
  }

  async forgotpassword({ view, auth, response }) {
    try {
      await auth.check();
      return response.redirect('back');
    } catch (error) {
    }
    return view.render('auth/forgotpassword');
  }
}

module.exports = AuthController
