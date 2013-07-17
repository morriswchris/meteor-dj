Meteor.startup(function () {
    // code to run on server at startup
    
    //Songs.remove({});
    var options = { hostname: 'http://api.soundcloud.com'
               , path: "/tracks"
               , qs:{ format: "json"
                    , limit: 2
                    , client_id: "0f46908c3c09f673750544d594136211"
                    , streamable: "true"
                    }
               , method: "get"                
               };
    song = Songs.find({});
    Songs.remove({});
    if( song.count() < 2 )
    {
        var req = Meteor.http.call( options.method
                                  , options.hostname+options.path
                                  ,{ params: options.qs }
                                  , function (error, response) { 
                    _.each( response.data, function ( r )
                    {
                       console.log( "song", r.title, "\n" );                       
                       Songs.insert( r ); 
                    });
            });
    }
    

  });