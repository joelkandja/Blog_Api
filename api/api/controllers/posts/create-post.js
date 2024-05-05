module.exports = {


  friendlyName: 'Create post',


  description: '',


  inputs: {
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true,
    },
    content: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'ref',
      required: true,
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let post = {}
    let res = {
      'message': 'Object POST: Created',
      data: {}
    };

    let postData = { name: inputs.name, category: inputs.category, content: inputs.content, description: inputs.description }
    sails.log('inputs', inputs);



    try {
      post = await Post.create(inputs).fetch();
    } catch (error) {
      res.message = 'Object POST: Not Created';
      res.success = false
    }

    if (post)
      res.data = { post }
    // All done.
    return exits.success(res);

  }


};
