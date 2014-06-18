define(['backbone','app/movie'],
function (Backbone,Movie){
  return Backbone.View.extend({
    
    el: $('body'),
    $list: $("#moviesList"),
    form: $('form[name="newMovie"]')[0],

    // Our template for the line of statistics at the bottom of the app.
    //statsTemplate: _.template($('#stats-template').html()),

    // Delegated events for creating new items, and clearing completed ones.
    events: {
      "click button[name='addMovie']" :  "createMovie"
    },

    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting todos that might be saved in *localStorage*.
    initialize: function(list,movieView) {
      this.movieList = list;
      this.movieView = movieView;

      //this.input = this.$("#new-todo");
      //this.allCheckbox = this.$("#toggle-all")[0];

      this.listenTo(list, 'add', this.addOne);
      this.listenTo(list, 'reset', this.addAll);
      this.listenTo(list, 'all', this.render);

      //Todos.fetch();
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
    },

    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function(movie) {
      var view = new this.movieView({model: movie});
      this.$list.append(view.render().el);
    },

    createMovie: function(e) {
      e.preventDefault();
      var movieAttrs = {};

      // Use defaults if not defined
      if ( this.form[0].value ) movieAttrs.title = this.form[0].value;
      if ( this.form[1].value ) movieAttrs.year = this.form[1].value;
      if ( this.form[2].value ) movieAttrs.poster = this.form[2].value;
      if ( this.form[3].value ) movieAttrs.description = this.form[3].value;
      movieAttrs.cast = [];

      // Reset form
      for (var i = 0, max_i = this.form.length; i < max_i; i++) {
        this.form[i].value = '';
      }

      // Add movie to list
      this.movieList.add(new Movie(movieAttrs));
    },

    // Clear all done todo items, destroying their models.
    clearCompleted: function() {
      _.invoke(Todos.done(), 'destroy');
      return false;
    }

  });
});