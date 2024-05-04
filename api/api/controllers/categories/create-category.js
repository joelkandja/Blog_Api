module.exports = {


  friendlyName: 'Create category',


  description: '',


  inputs: {
    name: {
      type: 'string',
      required: true,
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let category = {};


    let res = {
      'message': 'Object Category : Created ',
      data: {},
    };


    sails.log(inputs);
    try {

      category = await Categorie.create(inputs).fetch();
      sails.log(category)

    } catch (error) {
      res.message = 'Object Category : Not Created';
      res.success = false;
    };

    if (category)
      res.data = { category }

    return exits.success(res);


  }


};
