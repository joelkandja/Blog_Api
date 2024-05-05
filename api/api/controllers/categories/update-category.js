module.exports = {


  friendlyName: 'Update category',


  description: '',


  inputs: {
    id: {
      type: 'number',
      required: true,
    },
    name: {
      type: 'string',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let category = {};
    let res = {
      'message': 'Object Category: Updated',
      data: {}
    };

    try {
      category = await Categorie.updateOne({ id: inputs.id }).set({ name: inputs.name }).fetch();
    } catch (error) {
      res.message = 'Object Category: Not Updated';
      res.success = false
    }

    if (category)
      res.data = { category };
    // All done.
    return exits.success(res);

  }


};
