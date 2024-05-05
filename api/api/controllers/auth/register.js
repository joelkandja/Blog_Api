// api/controllers/auth/signup.js
module.exports = {
  friendlyName: 'Signup',

  description: 'Sign up for a new account.',

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
      description: 'User successfully signed up.'
    },
    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.'
    },
    invalid: {
      statusCode: 400,
      description: 'The provided email address or password is invalid.'
    }
  },

  fn: async function ({email, passwd}) {

    
    try {
      var newUserRecord = await User.create({
        email: email.toLowerCase(),
        passwd: await sails.helpers.passwords.hashPassword(passwd)
      }).fetch();

      let message = 'User successfully signed up.';
      return this.res.ok({message:message, newUserRecord: newUserRecord});
    } catch (err) {
      switch (err.code) {
        case 'E_UNIQUE':
          throw 'emailAlreadyInUse';
        case 'E_INVALID_NEW_RECORD':
          throw 'invalid';
        default:
          throw err;
      }
    }
  }
};
