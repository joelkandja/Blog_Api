module.exports = {


  friendlyName: 'Get category',


  description: '',


  inputs: {
    id: {
      type: 'number',
      required: true,
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let category = {};
    let res = {
      'message': 'Object Category: Getted',
      data: {},
    };

    try {
      category = await Categorie.findOne(inputs);
    } catch (error) {
      res.message = 'Object Category: Not getted';
      res.success = false
    };

    if (category)
      res.data = { category }
    // All done.
    return exits.success(res);

  }


};
