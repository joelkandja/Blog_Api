module.exports = {


  friendlyName: 'Update post',


  description: '',


  inputs: {
    id: {
      type: 'number',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
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
      required: true
    },


  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let post = {}
    let res = {
      'message': 'Object POST: Updated',
      data: {}
    }

    try {
      post = await Post.updateOne({ id: inputs.id }).set({ name: inputs.name, description: inputs.description, content: inputs.content, category: inputs.category });
    } catch (error) {
      res.message = 'Object POST: Not Updated';
      res.success = false
    };

    if (post)
      res.data = { post };
    // All done.
    return exits.success(res);

  }


};
