'use strict'

const User = use('App/Models/User');

const deleteAll = async () => {
  const users = await User.all();
  await Promise.all(users.rows.map(async (u) => {
    return await u.delete();
  }));
};

class UserSeeder {
  async run () {
    await deleteAll();

    await User.createMany([
      {
        fullname: 'Admin Vontrip',
        hp: '82148836272',
        email: 'admin@vontrip.com',
        password: '123',
      },
    ]);
  }
}

module.exports = UserSeeder
