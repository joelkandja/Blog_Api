module.exports = {


  friendlyName: 'Get categories',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let categories = []
    let res = {
      'message': 'Object Category : Created',
      data: {},
    }

    try {
      categories = await Categorie.find();

    } catch (error) {
      res.message = 'Object Category: Not Created';
      res.success = false;
    }
    if (categories)
      res.data = { categories }
    // All done.
    return exits.success(res);

  }


};
