module.exports = {
  friendlyName: 'Register',

  description: 'Register auth.',

  inputs: {
    email: {
      required: true,
      type: 'string',
      isEmail: true,
    },

    passwd: {
      required: true,
      type: 'string',
      maxLength: 200,
    },
  },

  exits: {
    // success: {
    //   description: 'New user registered successfully.'
    // },
    // emailAlreadyInUse: {
    //   statusCode: 409,
    //   description: 'The provided email address is already in use.'
    // },
    // invalid: {
    //   statusCode: 400,
    //   description: 'The provided email address or password is invalid.'
    // }
  },

  fn: async function (inputs, exits) {

    sails.log('inputs', inputs);

    return;
    try {
      var newEmail = email.toLowerCase();

      var newUserRecord = await User.create({
        email: newEmail,
        passwd: await sails.helpers.passwords.hashPassword(passwd),
        tosAcceptedByIp: this.req.ip
      }).fetch();

      if (sails.config.custom.enableBillingFeatures) {
        let stripeCustomerId = await sails.helpers.stripe.saveBillingInfo.with({
          emailAddress: newEmail
        }).timeout(5000).retry();
        await User.updateOne({id: newUserRecord.id})
        .set({
          stripeCustomerId
        });
      }
      this.req.session.userId = newUserRecord.id;

      // In case there was an existing session (e.g. if we allow users to go to the signup page
      // when they're already logged in), broadcast a message that we can display in other open tabs.
      if (sails.hooks.sockets) {
        await sails.helpers.broadcastSessionChange(this.req);
      }

      return this.res.ok({message: 'New user registered successfully.'});
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
