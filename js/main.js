(function(globals){
// Don't worry if that seems a little funky...

  /**
   * Internal representation of the game board in its current state.
   *
   * @see game.board
   * @see game.tracer
   * @see initial
   * @var {Array} of {Array} of {String|null}
   */

  var current = 0;

  var board = initial(); // initialize the `board`

  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */
  var moves = [
    [63,43], [06,25], [62,42],
    [14,24], [66,56], [13,33],
    [75,66], [05,14], [76,55]
  ]; // END moves


  // You don't need to understand `globals` yet...
  var game = globals.game = {
    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
    },
    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){
      board = initial();

      return this;
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){
      applyMove(moves[current][0],
        moves[current++][1]);

      return this;
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      current--;
      var fromPrev = moves[current][0];
      var toPrev = moves[current][1];
      applyMove(toPrev, fromPrev);
      return this;
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
      applyMove(moves[9]);
      return this;
    },
    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
    // tracer: function(){
    //   var bullet = '';
    //
    //   for ( var rank = 0; rank < board.length; rank++ ){
    //     bullet += '|';
    //     for ( var file = 0; file < board[rank].length; file++ ){
    //       bullet += board[rank][file] || ' |';
    //     }
    //     bullet += '\n';
    //   }
    //
    //   return bullet;
    // },

  }; // END game

  function applyMove(from, to){
    var forRowNum = Math.floor(from/10);
      var forColNum = from % 10;
      var piece = board[forRowNum][forColNum];
      board[forRowNum][forColNum] = null;
      var toRowNum = Math.floor(to/10);
      var toColNum = to % 10;
	  board[toRowNum][toColNum] = piece;

}  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial


// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
