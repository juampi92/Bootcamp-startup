requirejs.config({
    baseUrl: 'js/lib',
    paths: {
      app: '../app'
    },
    shim: {
      'backbone': {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        }
    }
  });

requirejs(['backbone','app/movie','app/view_movie','app/view_favs'],
function (Backbone,Movie,MovieView,FavsView){

  var Favs = Backbone.Collection.extend({
    model: Movie
  });

  var list = new Favs(),
    favsView = new FavsView(list,MovieView);

  list.add( new Movie(
    { title:'Batman Begins',
      year:2005,
      poster:'http://upload.wikimedia.org/wikipedia/en/a/af/Batman_Begins_Poster.jpg',
      description: 'After training with his mentor, Batman begins his war on crime to free the crime-ridden Gotham City from corruption that the Scarecrow and the League of Shadows have cast upon it.',
      cast: [
        { actor:'Christian Bale', role:'Bruce Wayne' },
        { actor:'Gary Oldman', role:'Commissioner Gordon' },
        { actor:'Michael Caine', role:'Alfred' },
        { actor:'Tom Hardy', role:'Bane' },
        { actor:'Liam Neeson', role:'Ducard' },
        { actor:'Cillian Murphy', role:'Scarecrow' },
      ]
    }) );

  list.add( new Movie(
    { title:'The Dark Knight',
      year:2008,
      poster:'http://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg',
      description: 'When Batman, Gordon and Harvey Dent launch an assault on the mob, they let the clown out of the box, the Joker, bent on turning Gotham on itself and bringing any heroes down to his level.',
      cast: [
        { actor:'Christian Bale', role:'Bruce Wayne' },
        { actor:'Gary Oldman', role:'Commissioner Gordon' },
        { actor:'Michael Caine', role:'Alfred' },
        { actor:'Heath Ledger', role:'Joker' },
        { actor:'Aaron Eckhart', role:'Harvey Dent' },
      ]
    }) );

  list.add( new Movie(
    { title:'The Dark Knight Rises',
      year:2012,
      poster:'http://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg',
      description: 'Eight years after the Joker`s reign of anarchy, the Dark Knight must return to defend Gotham City against the enigmatic jewel thief Catwoman and the ruthless mercenary Bane as the city teeters on the brink of complete annihilation.',
      cast: [
        { actor:'Christian Bale', role:'Bruce Wayne' },
        { actor:'Gary Oldman', role:'Commissioner Gordon' },
        { actor:'Michael Caine', role:'Alfred' },
        { actor:'Tom Hardy', role:'Bane' },
        { actor:'Anne Hathaway', role:'Selina' },
      ]
    }) );


});