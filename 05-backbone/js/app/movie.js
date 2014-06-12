define(['backbone'],
  function (Backbone){

  return Backbone.Model.extend({
    defaults: {
      'title': 'Title',
      'year': 0,
      'poster': ''
    },
    initialize: function(){
      
    }
  });
});