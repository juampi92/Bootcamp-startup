define(['backbone'],
  function (Backbone){

  return Backbone.Model.extend({
    defaults: {
      'title': 'Title',
      'year': 2000,
      'poster': '',
      'description':'Description here...'
    },
    initialize: function(){
      
    }
  });
});