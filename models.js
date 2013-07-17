Songs = new Meteor.Collection("songs");

Meteor.methods({
  // options should include: title, description, x, y, public
  pause: function (options) {   

    return Songs.update( { playing: true }, {$set: { playing: options } } );
  }
  , play: function ( id )
  {
      return Songs.update( { _id: id }, { $set: { playing: true } } );
  }
});