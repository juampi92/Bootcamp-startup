define(['director'],
function (Director) {
  
    var attrs = [],
      director = null;

    function Movie(title){
      attrs.title = title;
    }
    Movie.prototype.constructor = Movie;
    Movie.prototype.set = function(nom,val) {
      attrs[nom] = val;
      return this;
    };
    Movie.prototype.get = function(nom) {
      return attrs[nom];
    };

    Movie.prototype.getDirector = function(director){
      director = director;
    };
    Movie.prototype.getDirector = function(){
      return director;
    };

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
});
