module.exports = {
  friendlyName: 'Login',

  description: 'Log in to an existing account.',

  inputs: {
    email: {
      type: 'string',
      required: true,
      isEmail: true
    },
    passwd: {
      type: 'string',
      required: true
    }
  },

  exits: {
    success: {
      description: 'User successfully logged in.'
    },
    invalid: {
      statusCode: 400,
      description: 'Invalid email or password.'
    }
  },

  fn: async function ({email, passwd}) {
   
    let user = await User.findOne({ email });

   
    if (!user || !(await sails.helpers.passwords.checkPassword(passwd, user.passwd))) {
      throw 'invalid';
    }

    return this.res.json({ message: 'User successfully logged in.', user });
  }
};
