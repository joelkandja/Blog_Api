module.exports = {


  friendlyName: 'Get posts',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let posts = [];
    let res = {
      'message': 'Object POSTS: Received',
      data: {}
    }

    try {
      posts = await Post.find().populate('category');
    } catch (error) {
      res.message = 'Object POSTS: Not Received';
      res.success = false;
    }
    // All done.
    if (posts)
      res.data = { posts }

    return exits.success(res);

  }


};
