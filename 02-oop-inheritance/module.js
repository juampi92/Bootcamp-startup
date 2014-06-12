var Movie = (function(){
  
  function Movie(title){
    var attrs = [],
      actors = [];
    attrs.title = title;

    this.playing = false;
    this.events = [];

    this.set = function(nom,val) {
      attrs[nom] = val;
      return this;
    };
    this.get = function(nom) {
      return attrs[nom];
    };

    this.addActor = function(actor){
      actors.push(actor);
    };
    this.addActors = function(actorsArr){
      actors = actors.concat(actorsArr);
    };
    this.displayActors = function(){
      var out = [];
      for (var i = 0, max_i = actors.length; i < max_i; i++)
        out.push((actors[i]).get('name'));
      console.log(out);
    };
  }

  Movie.prototype.constructor = Movie;
  Movie.prototype.play = function() {
    this.playing = true;
    this.trigger('play',this);
    return this;
  };
  Movie.prototype.stop = function() {
    this.playing = false;
    this.trigger('stop',this);
    return this;
  };
  Movie.prototype.on = function(event,callback) {
    this.events[event] = callback;
  };
  Movie.prototype.trigger = function(event,params) {
    if ( this.events[event] )
      this.events[event](params);
  };

  return Movie;

})();

// Downloadable Movie
function DownloadableMovie(title){
  this.constructor(title);
}
DownloadableMovie.prototype = new Movie();

DownloadableMovie.prototype.download = function(){
  console.log('Downloading ' + this.get('title'));
};

// Social Mixin

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

var social = {
  share: function(friend){
    console.log('Sharing '+this.get('title')+' with ' + friend);
  },
  like: function(){
    console.log('Liked ' + this.get('title'));
  }
};

extend(DownloadableMovie.prototype,social); // Mixin


// Actor
var Actor = (function(){
  function Actor(name){
    var attrs = [];
    attrs.name = name;

    this.get = function(attr){
      return attrs[attr];
    };
    this.set = function(attr,val){
      attrs[attr] = val;
    };
  }
  return Actor;
})();


// Run this code:
/*
  var batman = new DownloadableMovie("Batman Begins");
  batman.share("All my friends");
  batman.like();

  batman.addActor(new Actor("Christian Bale"));
  batman.addActors([new Actor("Michael Caine"),new Actor("Liam Neeson"),new Actor("Gary Oldman")]);

  batman.displayActors();
*/