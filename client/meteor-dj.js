Meteor.subscribe( "songs" );
Template.List.Songs = function()
{
    s = Songs.find({}).fetch();
    playing = false;
    _.each( s, function( ss ){
        if( ss.playing && ! playing )
            {
                var a = $("audio#"+ss._id)[0];
                if( a )
                    {
                        console.log( a );
                        console.log( "start playing" );
                        a.play();
                        playing = true;
                    }   
            }
        else
            {
                var a = $("audio#"+ss._id)[0];
                if( a )
                    {
                        console.log( a );
                        console.log( "stop playing" );
                        a.pause();
                    }
            }
    });
    console.log( "render" );
    return s;
};

Template.Song.events({
'click .play': function ( e ) {
    e.preventDefault();
    console.log( this );    
    Meteor.call("pause", false);
    Meteor.call( "play", this._id );
}
,
'click .pause': function ( e ) {
    e.preventDefault();
    console.log( this );    
    Meteor.call("pause", false);
}

});