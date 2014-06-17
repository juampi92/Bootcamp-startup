define(['backbone'],
function (Backbone){
  return Backbone.View.extend({
    //... is a list tag.
    tagName:  "article",

    // Cache the template function for a single item.
    template: _.template($('#movie-template').html()),

    // The DOM events specific to an item.
    events: {
      "click .toggle"   : "expand",
      "click .discard"  : "render",
      "dblclick img"    : "editPoster",
      "click .save"     : "save",
      "click .delete"   : "delete",
      "click button[name='addActor']" : "newActor"
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:poster', this.renderPoster);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    // Re-render the titles of the todo item.
    render: function(exp) {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.addClass("clearfix");
      if ( exp === true ) 
        this.$el.addClass("expanded");
      else
        this.$el.removeClass("expanded");
      return this;
    },

    renderPoster: function(){
      this.$el.find('img').attr('src',this.model.get("poster"));
      console.log("Magia");
    },

    expand: function(e) {
      if ( this.$el.hasClass("expanded") ) {
        this.$el.removeClass("expanded");
        $(e.currentTarget).html("+");
      }
      else {
        this.$el.addClass("expanded");
        $(e.currentTarget).html("-");
      }
    },

    save: function(e){
      var $elements = {}, cast = [];
      $elements.title = this.$el.find('h2 .title');
      $elements.year = this.$el.find('h2 .year');
      $elements.descr = this.$el.find('p');
      $elements.ul = this.$el.find('ul.cast li');

      var $b,act,rol;
      $elements.ul.each(function(a,b){
        $b = $(b);
        act = $b.children('b').html();
        rol = $b.children('i').html();
        if ( act && rol) {
          cast.push({
            actor: act, role: rol
          });
        }
      });

      this.model.set({
        title: $elements.title.html(),
        year: $elements.year.html(),
        descr: $elements.descr.html(),
        cast: cast
      });

      console.log(cast);
    },

    editPoster: function(e){
      var prompt = window.prompt('Image poster URL',this.model.get('poster'));
      if ( prompt )
        this.model.set('poster',prompt);
    },

    delete: function(){
      if ( confirm("Are you sure you want to delete this movie?") )
        this.model.destroy();
    },

    newActor: function(e){
      var $li = $(e.currentTarget).parent(),
        actor = $li.children('[name="actor"]'),
        rol = $li.children('[name="char"]');


        if ( !actor.val() )
          return actor.addClass('error');
        else
          actor.removeClass('error');

        if ( !rol.val() )
          return rol.addClass('error');
        else
          rol.removeClass('error');

        var cast = this.model.get("cast");
        cast.push({actor: actor.val() , role: rol.val() });
        this.model.set("cast",cast);
        this.render(true);
    }

  });
});