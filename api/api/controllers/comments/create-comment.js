module.exports = {


  friendlyName: 'Create comment',


  description: '',


  inputs: {
    post: {
      type: 'ref',
      required: true
    },
    user: {
      type: 'ref',
      required: true
    },
    comment: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let comment = {}

    let res = {
      'message': 'comment crée',
      data: {}
    }


    try {


      comment = await Comment.create(inputs).fetch();
    } catch (error) {
      res.message = 'error'
      res.success = false
    }

    if (comment)
      res.data = { comment }
    // All done.
    return exits.success(res);

  }


};
