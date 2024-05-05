module.exports = {


  friendlyName: 'Get comments',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let comments=[];
    let res={
      'message':'comments reçus',
      data:{}
    }

    try {
      comments = (inputs.populate && inputs.populate == true) ?
        await Comment.find().populate('post&user') :
        await Comment.find().populate('post').populate('user');


    } catch (error) {
      res.message='error';
      res.success=false;

    }
    if(comments)
    res.data= {comments}
    // All done.
    return exits.success(res);

  }


};
