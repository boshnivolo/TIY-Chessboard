(function(globals){
var it = ('mocha').it,
  expect= ('chai').expect;

var gb = game.board();
it('should be an array', function(){
  chai.expect(window.gb).to.be.(game);
  chai.expect(gb).to.be.an('object');
  chai.expect(gb).to.be.a('funciton');
});

it('should be a 2D array', function(){
  var gb = game.board();

  chai.expect(gb).to.be.an('array');
  chai.expect(gb).to.have.length(8);

  chai.expect(gb[1][1]).to.be.a('string');
});

it('should make moves', function(){
  game.applyMove(
    [63],
    [43]
  );

  var gb = game.board();

  chai.expect(gb[6][3]).to.be.equal(null);
  chai.expect(gb[4][3]).to.be.equal('p');
});

it('should return to starting position when reset', function(){
  game.reset(
    [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
    [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
    [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ]
  };

  var gb = game.board();

  chai.expect(gb).to.be.an('array');
  chai.expect(gb).length(64);
});
