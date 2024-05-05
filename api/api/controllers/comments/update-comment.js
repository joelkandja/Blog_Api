module.exports = {


  friendlyName: 'Update comment',


  description: '',


  inputs: {
    id:{
      type:'number',
      required:true,
    },
    user:{
      type:'ref',
      required:true,
    },
    post:{
      type:'ref',
      required:true,
    },
    comment:{
      type:'string',
      required:true,
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let comment={};
    let res={
      'message':'comment update',
      data:{}
    }
    try {
      comment= await Comment.updateOne({id:inputs.id}).set({user:inputs.user, post:inputs.post, comment:inputs.comment});

    } catch (error) {
      res.message = 'comment non updated';
      res.success = false

    };

    if(comment)
    res.data={comment};


    // All done.
    return exits.success(res);

  }


};
