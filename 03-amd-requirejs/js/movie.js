define(['director'],
function (Director) {
  
    function Movie(title){
      var attrs = [];
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
});
