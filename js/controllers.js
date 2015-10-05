(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
var $board = $('.board tbody');

var gameboard = game.board();

var current = 0;

  // document.querySelector(SELECTOR)
  //   .addEventListener(TYPE, CALLBACK);
  // // AKA
  // jQuery(SELECTOR).on(TYPE, CALLBACK);
  // // Where CALLBACK is...
  // function CALLBACK (EVENT){
  //   // Do something with Models and Views...
  //   // Maybe do something with EVENT...?
  // }


  // Controller for "next move"...
  jQuery("#step_forward").on('click', function(event){
    game.next();
    update.view();
  });

  // Controller for "previous move"...
  jQuery("#step_back").on('click', function(event){
    game.prev();
    update.view();
  });

  // Controller for "fast-forward"...
  jQuery("#fast_forward").on('click', function(event){
    game.end();
    update.view();
  });

  jQuery("#rewind").on(.'click', function(event){
    game.reset();
    update.view();
  });

  // Controller for anything else...
  jQuery(".play_pause").on('click', function(event){
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
})(window || module && module.exports || this)
