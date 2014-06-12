  var Movie = function Movie(title){
    var attrs = [];

    this.playing = false;
    this.events = [];

    attrs.title = title;

    this.set = function(nom,val) {
      attrs[nom] = val;
      return this;
    };
    this.get = function(nom) {
      return attrs[nom];
    };

    return this;
  };

  Movie.prototype.play = function() {
    this.playing = true;
    this.trigger("play",this);
    return this;
  };
  Movie.prototype.stop = function() {
    this.playing = false;
    this.trigger("stop",this);
    return this;
  };
  Movie.prototype.on = function(event,callback) {
    this.events[event] = callback;
  };
  Movie.prototype.trigger = function(event,params) {
    if ( this.events[event] )
      this.events[event](params);
  };

  function MovieObserver(movie){
    movie.on("play",this.updatePlay);
    movie.on("stop",this.updateStop);
  }
  MovieObserver.prototype.updatePlay = function(movie)  {
    console.log("Playing movie " + movie.get("title"));
  };
  MovieObserver.prototype.updateStop = function(movie)  {
    console.log("Stopping movie " + movie.get("title"));
  };

  /* 
    var terminator = new Movie("Terminator");
    var terminator_obs = new MovieObserver();

    terminator.on("play",obs.updatePlay);
    terminator.on("stop",obs.updateStop);

    terminator.play();
    terminator.stop();
  */
