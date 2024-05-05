const { defaults } = require("sails-mysql");

module.exports = {


  friendlyName: 'Get comment',


  description: '',


  inputs: {
    id:{
      type:'number',
      required:true
    },
    populate:{
      type: 'boolean',
      defaultsTo: false
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let comment={}
    let res={
      'message':'comment reçu',
      data:{}
    }

     try {
       comment=(inputs.populate && inputs.populate == true) ?
          await Comment.findOne({id:inputs.id})
            .populate('post&user'):
          await Comment.findOne({id:inputs.id}).populate('post').populate('user');
     } catch (error) {
       res.message='error'
       res.success=false

     }
    if(comment)
    res.data={comment}



    // All done.
    return exits.success(res);

  }


};
