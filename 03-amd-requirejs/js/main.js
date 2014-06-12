requirejs.config({
    baseUrl: 'js',

});

// Start the main app logic.
requirejs(['movie','jquery'],
function   (Movie,$) {
    var alien = new Movie();
    var ridleyScott = new Director('Ridley Scott');
    ridleyScott.set('quotes',['Cast is everything.','Do what ...']);
    alien.set('director', ridleyScott);

    $(document).ready(function () {
       var quotes = alien.get('director').speak(),
        $ul = $('ul.quotes'),
        $li;

       for (var i = 0, max_i = quotes.length; i < max_i; i++) {
         $li = $('<li></li>').html(quotes[i]);
         $li.appendTo($ul);
       }
    });
});