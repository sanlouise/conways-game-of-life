const conway = require('../conway.js')

describe("Initial board", () => {
  test('board', () => {
    const initializeBoard = conway.initializeBoard();
    const expected = [ [], [], [], [], [], [], [], [], [], [] ]
    expect(initializeBoard).toEqual(expected);
  })

  test('board', () => {
    const initializeBoard = conway.initializeBoard();
    const expected = 10;
    expect(initializeBoard.length).toEqual(expected);
  })
})
