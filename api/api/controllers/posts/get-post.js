module.exports = {


  friendlyName: 'Get post',


  description: '',


  inputs: {
    id: {
      type: 'number',
      required: true,
    },

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let post = {};
    let res = {
      'message': 'Object POST: Received',
      data: {}
    };

    try {
      post = await Post.findOne(inputs)

    } catch (error) {
      res.message = 'Object POST: Not Received';
      res.success = false;
    };

    if (post)
      res.data = { post }
    // All done.
    return exits.success(res);

  }


};
